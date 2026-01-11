/**
 * УЛЬТРА-БИБЛИОТЕКА РАБОТ AKIM.PRO (V4.0)
 * Самая полная база: от бытовой электрики до промышленного монтажа и систем "Умный дом".
 */

const ESTIMATE_LIBRARY = [
    {
        category: "1. Демонтажные и подготовительные работы",
        items: [
            { id: "dem_reg", name: "Демонтаж розетки / выключателя", price: 80 },
            { id: "dem_cable", name: "Демонтаж старой проводки (метр)", price: 40 },
            { id: "dem_shield_old", name: "Демонтаж старого электрощита", price: 800 },
            { id: "dem_lamp", name: "Демонтаж старой люстры / бра", price: 200 },
            { id: "dem_box", name: "Поиск и вскрытие скрытой коробки", price: 600 },
            { id: "wall_prep", name: "Грунтовка штроб (обеспыливание)", price: 30 }
        ]
    },
    {
        category: "2. Штробление и Алмазное бурение",
        items: [
            { id: "pts_beton_hd", name: "Подрозетник: Бетон / Монолит", price: 400 },
            { id: "pts_brick_hd", name: "Подрозетник: Кирпич", price: 250 },
            { id: "pts_gas_hd", name: "Подрозетник: Газоблок / Гипс", price: 150 },
            { id: "shr_beton_m", name: "Штроба в бетоне (до 25мм)", price: 300 },
            { id: "shr_brick_m", name: "Штроба в кирпиче (до 25мм)", price: 200 },
            { id: "shr_gas_m", name: "Штроба в газоблоке / гипсе", price: 100 },
            { id: "hole_drill", name: "Сквозное отверстие в стене", price: 250 },
            { id: "diamond_hole", name: "Алмазное бурение (диаметр >50мм)", price: 800 }
        ]
    },
    {
        category: "3. Монтаж кабельных линий",
        items: [
            { id: "cbl_ceiling", name: "Кабель по потолку (гофра/клипса)", price: 120 },
            { id: "cbl_floor", name: "Кабель по полу (в ПНД трубе)", price: 90 },
            { id: "cbl_wall_open", name: "Кабель открыто (на скобах)", price: 70 },
            { id: "cbl_trunk", name: "Монтаж кабель-канала (метр)", price: 150 },
            { id: "box_weld", name: "Распаечная коробка (сварка/СИЗ)", price: 550 },
            { id: "box_no_weld", name: "Распаечная коробка (клеммы Wago)", price: 400 },
            { id: "cable_pull", name: "Затяжка кабеля в трубу / гофру", price: 50 },
            { id: "tray_metal", name: "Монтаж металлического лотка", price: 350 }
        ]
    },
    {
        category: "4. Сборка и монтаж электрощитов",
        items: [
            { id: "sh_niche_small", name: "Установка щита (до 12 мод)", price: 1500 },
            { id: "sh_niche_med", name: "Установка щита (до 36 мод)", price: 3500 },
            { id: "sh_niche_large", name: "Установка щита (от 48 мод)", price: 5500 },
            { id: "sh_module_1", name: "Автомат 1-полюсный", price: 250 },
            { id: "sh_module_3", name: "Автомат 3-полюсный", price: 500 },
            { id: "sh_uzo", name: "УЗО / Дифф. автомат", price: 450 },
            { id: "sh_relay", name: "Реле напряжения / Контактор", price: 750 },
            { id: "sh_meter_1", name: "Счетчик 220В", price: 1200 },
            { id: "sh_meter_3", name: "Счетчик 380В", price: 2200 },
            { id: "sh_mark", name: "Маркировка и организация щита", price: 500 }
        ]
    },
    {
        category: "5. Чистовые механизмы и фурнитура",
        items: [
            { id: "inst_socket", name: "Розетка / Выключатель", price: 180 },
            { id: "inst_dimmer", name: "Диммер / Проходной выключатель", price: 350 },
            { id: "inst_tv_eth", name: "Розетка TV / Internet", price: 250 },
            { id: "inst_plate", name: "Силовая розетка (плита/духовка)", price: 600 },
            { id: "inst_thermo", name: "Терморегулятор теплого пола", price: 700 },
            { id: "inst_floor_m", name: "Укладка теплого пола (кв.м.)", price: 450 },
            { id: "master_sw", name: "Монтаж мастер-выключателя", price: 1200 }
        ]
    },
    {
        category: "6. Освещение и Дизайн",
        items: [
            { id: "l_simple", name: "Люстра (базовая)", price: 800 },
            { id: "l_heavy", name: "Люстра (тяжелая / многоярусная)", price: 2000 },
            { id: "l_spot", name: "Точечный светильник (врезка)", price: 350 },
            { id: "l_track", name: "Трековая система (метр)", price: 500 },
            { id: "l_led_strip", name: "LED лента (пайка и монтаж) метр", price: 300 },
            { id: "l_led_prof", name: "Профиль для ленты (врезка)", price: 400 },
            { id: "l_led_psu", name: "Блок питания / Драйвер LED", price: 500 }
        ]
    },
    {
        category: "7. Силовое и мощное оборудование",
        items: [
            { id: "pow_stab", name: "Монтаж стабилизатора (на стену)", price: 3000 },
            { id: "pow_gen", name: "Генератор + АВР (подключение)", price: 6000 },
            { id: "pow_engine", name: "Электродвигатель (подключение)", price: 3500 },
            { id: "pow_heat", name: "Котел отопления (силовая часть)", price: 2500 },
            { id: "pow_charger", name: "Зарядка для электромобиля", price: 5000 }
        ]
    },
    {
        category: "8. Слаботочка и Безопасность",
        items: [
            { id: "sec_cam", name: "Камера видеонаблюдения", price: 1800 },
            { id: "sec_dom", name: "Видеодомофон (комплект)", price: 3500 },
            { id: "sec_sens", name: "Датчик движения / Фотореле", price: 600 },
            { id: "sec_leak", name: "Система антипротечки (монтаж)", price: 4000 },
            { id: "sec_wifi", name: "Настройка роутера / WiFi сети", price: 800 }
        ]
    },
    {
        category: "9. Молниезащита и Заземление",
        items: [
            { id: "gnd_kit", name: "Контур заземления (монтаж)", price: 7000 },
            { id: "gnd_check", name: "Замер сопротивления (прибором)", price: 1500 },
            { id: "lightning", name: "Молниеотвод на кровле (метр)", price: 500 },
            { id: "anti_ice", name: "Обогрев кровли / водостока", price: 600 }
        ]
    },
    {
        category: "10. Профессиональный сервис",
        items: [
            { id: "srv_visit", name: "Выезд, диагностика, замер", price: 500 },
            { id: "srv_buy", name: "Подбор и закупка материала", price: 1500 },
            { id: "srv_project", name: "Исполнительная схема (проект)", price: 3000 },
            { id: "srv_night", name: "Аварийный выезд (24/7)", price: 3500 }
        ]
    }
];
