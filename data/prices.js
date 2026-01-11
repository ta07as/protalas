/**
 * УЛЬТРА-БИБЛИОТЕКА РАБОТ AKIM.PRO (V3.0)
 * Включает: 380В, Автоматизацию, Молниезащиту и Сервис.
 */

const ESTIMATE_LIBRARY = [
    {
        category: "1. Демонтаж и Подготовка",
        items: [
            { id: "dem_reg", name: "Демонтаж старой точки (розетка/выкл)", price: 80 },
            { id: "dem_cable", name: "Демонтаж старой проводки (метр)", price: 40 },
            { id: "dem_shield_old", name: "Демонтаж старого щита (со стены)", price: 800 },
            { id: "dem_lamp", name: "Демонтаж люстры/светильника", price: 200 },
            { id: "wall_prep", name: "Грунтовка штроб перед заделкой", price: 30 }
        ]
    },
    {
        category: "2. Алмазное бурение и Штробление",
        items: [
            { id: "pts_beton_hd", name: "Подрозетник (Монолит/Бетон)", price: 400 },
            { id: "pts_brick_hd", name: "Подрозетник (Кирпич)", price: 250 },
            { id: "pts_gas_hd", name: "Подрозетник (Газоблок/Гипс)", price: 150 },
            { id: "shr_beton_m", name: "Штроба в бетоне (до 25мм)", price: 300 },
            { id: "shr_brick_m", name: "Штроба в кирпиче (до 25mm)", price: 200 },
            { id: "shr_gas_m", name: "Штроба в газоблоке/гипсе", price: 100 },
            { id: "hole_drill", name: "Сквозное отверстие (до 30см)", price: 200 },
            { id: "hole_drill_deep", name: "Сквозное отверстие (глубокое)", price: 400 }
        ]
    },
    {
        category: "3. Монтаж кабельных трасс",
        items: [
            { id: "cbl_ceiling", name: "Кабель по потолку (гофра/клипса)", price: 120 },
            { id: "cbl_floor", name: "Кабель по полу (в ПНД трубе)", price: 90 },
            { id: "cbl_wall_open", name: "Кабель открыто (на скобах)", price: 70 },
            { id: "cbl_trunk", name: "Кабель-канал (монтаж)", price: 150 },
            { id: "box_weld", name: "Распаечная коробка (сварка/СИЗ)", price: 550 },
            { id: "box_no_weld", name: "Распаечная коробка (клеммы Wago)", price: 400 },
            { id: "tray_metal", name: "Монтаж лотка (металл)", price: 350 }
        ]
    },
    {
        category: "4. Распределительные щиты (Сборка)",
        items: [
            { id: "sh_niche_12", name: "Установка щита (до 12 мод)", price: 1500 },
            { id: "sh_niche_24", name: "Установка щита (до 24 мод)", price: 2500 },
            { id: "sh_niche_48", name: "Установка щита (до 48 мод)", price: 4500 },
            { id: "sh_module_1", name: "Автомат 1-полюсный (установка)", price: 250 },
            { id: "sh_module_3", name: "Автомат 3-полюсный (установка)", price: 500 },
            { id: "sh_uzo", name: "УЗО / Диф.автомат (монтаж)", price: 450 },
            { id: "sh_relay", name: "Реле напряжения / Контактор", price: 700 },
            { id: "sh_meter_1", name: "Счетчик 220В", price: 1000 },
            { id: "sh_meter_3", name: "Счетчик 380В", price: 2000 },
            { id: "sh_mark", name: "Маркировка и наклейки", price: 500 }
        ]
    },
    {
        category: "5. Чистовая электрика",
        items: [
            { id: "inst_socket", name: "Розетка / Выключатель", price: 180 },
            { id: "inst_dimmer", name: "Диммер / Переключатель (проход)", price: 300 },
            { id: "inst_tv_eth", name: "Розетка TV / Internet", price: 250 },
            { id: "inst_plate", name: "Вывод под электроплиту", price: 600 },
            { id: "inst_thermo", name: "Терморегулятор (теплый пол)", price: 700 },
            { id: "inst_floor_m", name: "Теплый пол (мат/кабель) кв.м.", price: 450 }
        ]
    },
    {
        category: "6. Освещение и Декор",
        items: [
            { id: "l_simple", name: "Люстра (простая)", price: 700 },
            { id: "l_heavy", name: "Люстра (тяжелая/сборка)", price: 1500 },
            { id: "l_spot", name: "Точечный светильник (врезка)", price: 300 },
            { id: "l_track", name: "Трековый светильник (метр)", price: 400 },
            { id: "l_led_strip", name: "LED лента (монтаж/пайка) метр", price: 300 },
            { id: "l_led_prof", name: "LED профиль (врезка/монтаж)", price: 350 },
            { id: "l_led_psu", name: "Блок питания для ленты", price: 450 }
        ]
    },
    {
        category: "7. Силовое оборудование (380В)",
        items: [
            { id: "pow_stab", name: "Стабилизатор напряжения (монтаж)", price: 2500 },
            { id: "pow_gen", name: "Подключение генератора (АВР)", price: 5000 },
            { id: "pow_engine", name: "Подключение двигателя/станка", price: 3000 },
            { id: "pow_heat", name: "Подключение котла отопления", price: 2000 }
        ]
    },
    {
        category: "8. Слаботочка и Безопасность",
        items: [
            { id: "sec_cam", name: "Установка видеокамеры (шт)", price: 1500 },
            { id: "sec_dom", name: "Видеодомофон + вызывная панель", price: 3000 },
            { id: "sec_sens", name: "Датчик движения/протечки", price: 600 },
            { id: "sec_wifi", name: "Настройка роутера/точки доступа", price: 800 }
        ]
    },
    {
        category: "9. Молниезащита и Заземление",
        items: [
            { id: "gnd_kit", name: "Контур заземления (монтаж)", price: 6500 },
            { id: "gnd_check", name: "Замер сопротивления (прибором)", price: 1500 },
            { id: "lightning", name: "Молниезащита (кровля) метр", price: 450 }
        ]
    },
    {
        category: "10. Сервис и Спецзадачи",
        items: [
            { id: "srv_visit", name: "Выезд и диагностика (Таллас)", price: 500 },
            { id: "srv_buy", name: "Закупка и доставка материала", price: 1200 },
            { id: "srv_project", name: "Прорисовка исполнительной схемы", price: 2500 },
            { id: "srv_night", name: "Аварийный выезд (ночной)", price: 3000 }
        ]
    }
];
