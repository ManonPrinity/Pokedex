var pokemon_img = document.getElementById("pokemon_img");
var pokemon_id = document.getElementById("pokemon_id");
var text_input = document.getElementById("text_input");

var current_id = 1;

function init() {

    play_snd("public/snd/open.wav", 0.5);
    change_pokemon(current_id);
}

function change_image(id) {

    pokemon_img.src = "public/img/front/" + id + ".png";
    pokemon_img.onload = function() {
        play_snd("public/snd/ping_1.wav", 0.5);
    }
}

function informations(id) {


}

function change_input_text(id) {

    var pokemon = pokemon_list[id - 1];
    text_input.value = pokemon.name;

}

function change_pokemon_id(id) {

    pokemon_id.innerHTML = pokemon_list[id - 1].id;
}

function change_pokemon(id) {

    change_input_text(id);
    change_pokemon_id(id);
    change_image(id);
}

function text_input_changed(event, val) {

    if (event.keyCode == 13) {

        for (var i = 0; i < pokemon_list.length; ++i)
        {

            if (pokemon_list[i].name.toLowerCase() == val.toLowerCase())
            {

                current_id = Number(pokemon_list[i].id)
                change_pokemon(current_id);
                return ;
            }
            else if (Number(pokemon_list[i].id) == Number(val))
            {

                current_id = Number(val);
                change_pokemon(current_id);
                return ;
            }
        }
    }
}

function pokedex_ctrl($scope) {

    $scope.name = current_id;

    $scope.a_button_click = function() {

        current_id = 1;
        change_pokemon(current_id);
    }

    $scope.select_button_click = function() {

        alert("select_button_click");
    }

    $scope.start_button_click = function() {

        alert("start_button_click");
    }

    $scope.up_button_click = function() {

        if (current_id == 151) {
            play_snd("public/snd/ping_2.wav", 0.1);
            return ;
        }
        else {
            current_id += 10;
            if (current_id > 151) {
                current_id = 151;
            }
            play_snd("public/snd/ping_4.wav", 0.1);
            change_pokemon(current_id);
        }
    }

    $scope.down_button_click = function() {

        if (current_id == 1) {
            play_snd("public/snd/ping_2.wav", 0.1);
            return ;
        }
        else {
            current_id -= 10;
            if (current_id < 1) {
                current_id = 1;
            }
            play_snd("public/snd/ping_4.wav", 0.1);
            change_pokemon(current_id);
        }
    }

    $scope.left_button_click = function() {

        if (current_id > 1) {
            --current_id;
            play_snd("public/snd/ping_4.wav", 0.1);
            change_pokemon(current_id);
        }
        else {
            play_snd("public/snd/ping_2.wav", 0.1);
        }
    }

    $scope.right_button_click = function() {

        if (current_id < 151) {
            ++current_id;
            play_snd("public/snd/ping_4.wav", 0.1);
            change_pokemon(current_id);
        }
        else {
            play_snd("public/snd/ping_2.wav", 0.1);
        }
    }

    $scope.b_button_click = function() {

        if (change_pokemon) {

        }
        alert("b_button_click");
    }

    $scope.c_button_click = function() {

        alert("c_button_click");
    }

    $scope.prev_button_click = function() {

        alert("prev_button_click");
    }

    $scope.next_button_click = function() {

        alert("next_button_click");
    }

    $scope.op1_button_click = function() {

        alert("op1_button_click");
    }

    $scope.op2_button_click = function() {

        alert("op2_button_click");
    }

};

function play_snd(src, vol) {

    var snd = new Audio(src);
    snd.volume = vol;
    snd.play();
}
