import AddAccount from "../component/svg/AddAccount";
import AlphaArrow from "../component/svg/AlphaArrow";
import Apple from "../component/svg/Apple";
import FollowSub from "../component/svg/FollowSub";
import InfoIcon from "../component/svg/InfoIcon";
import MacWinBack from "../component/svg/MacWinBack";
import MatchSub from "../component/svg/MatchSub";
import PrivateTool from "../component/svg/PrivateTool";
import Wide from "../component/svg/Wide";
import Window from "../component/svg/Window";


import tab1Img from "../img/activitiesBenefitOPT.webp"
import tab2Img from "../img/feedBenefitOPT.webp"
import tab3Img from "../img/calendarBenefitOPT.webp"
import tab4Img from "../img/aggregatorBenefitOPT.webp"
import tab5Img from "../img/alphaSearchBenefitOPT.webp"

export const PlateFromData = [
    {
        "main_Div": "info_tool_flex",
        "svg_Style": "svg_style",
        "svgIcon": <InfoIcon />,
        "title_Div": "info_toolTitle",
        "title": "Info in one place"
    },
    {
        "main_Div": "info_tool_flex",
        "svg_Style": "svg_style",
        "svgIcon": <PrivateTool />,
        "title_Div": "info_toolTitle",
        "title": "Private tools"
    },
    {
        "main_Div": "info_tool_flex",
        "svg_Style": "svg_style",
        "svgIcon": <Wide />,
        "title_Div": "info_toolTitle",
        "title": "Wide functionality"
    },
]

export const MacWin = [
    {
        "macWindowDIv": "mac_window",
        "buttonClass": "macWindow_btn",
        "btnTop": "macWin_top",
        "macWinIcon": <Apple />,
        "macWinTitleClass": "macWin_title",
        "macWinTitle": "macOs",
        "btnBottom": "macWin_bottom",
        "btnBackImg": <MacWinBack />
    },
    {
        "macWindowDIv": "mac_window",
        "buttonClass": "macWindow_btn",
        "btnTop": "macWin_top",
        "macWinIcon": <Window />,
        "macWinTitleClass": "macWin_title",
        "macWinTitle": "windows",
        "btnBottom": "macWin_bottom",
        "btnBackImg": <MacWinBack />
    },
]

export const AggButton = [
    {
        "aggBtn_div": "Agg_addList",
        "aggIcon": <AddAccount />,
        "aggTitle": "Add a list of top Twitter accounts",
        "bgClass": "bgClass1"
    },
    {
        "aggBtn_div": "Agg_addList",
        "aggIcon": <FollowSub />,
        "aggTitle": "Follow their new subscriptions",
        "bgClass": "bgClass2"
    },
    {
        "aggBtn_div": "Agg_addList",
        "aggIcon": <MatchSub />,
        "aggTitle": "We'll show you matches on those subscriptions",
        "bgClass": "bgClass3",
        "pointedArr": {
            "arrowDiv": "agg_arrow",
            "arrowIcon": <AlphaArrow />
        }
    },
]

export const roadMapStaus = [
    {
        "satusDivClass": "raodmap_status_flex",
        "statusBlinkDiv": "status_complete",
        "statusSpan": "status_span",
        "stausTitle": "Done"
    },
    {
        "satusDivClass": "raodmap_status_flex",
        "statusBlinkDiv": "status_inWork",
        "statusSpan": "status_span",
        "stausTitle": "In Work"
    },
    {
        "satusDivClass": "raodmap_status_flex",
        "statusBlinkDiv": "status_upComing",
        "statusSpan": "status_span",
        "stausTitle": "Upcoming"
    }
]

export const stageOneContent = [
    {
        "stage1Div": "stage1_contentFlex",
        "blinkDiv": "stage1_blink",
        "stageSpan": "stage1_Span",
        "stageTitle": "Development"
    },
    {
        "stage1Div": "stage1_contentFlex",
        "blinkDiv": "stage1_blink",
        "stageSpan": "stage1_Span",
        "stageTitle": "Activities and Aggregator"
    },
    {
        "stage1Div": "stage1_contentFlex",
        "blinkDiv": "stage1_blink",
        "stageSpan": "stage1_Span",
        "stageTitle": "Alpha test"
    },
    {
        "stage1Div": "stage1_contentFlex",
        "blinkDiv": "stage1_blink",
        "stageSpan": "stage1_Span",
        "stageTitle": "Alpha search tool"
    },
    {
        "stage1Div": "stage1_contentFlex",
        "blinkDiv": "status_inWork",
        "stageSpan": "stage1_Span",
        "stageTitle": "Beta test"
    },
]


export const featrues = [

    {
        "featureBtnDivClass": "feature_bottomLeftBtn",
        "featuresTitleClass": "feature_LeftBtnTitle",
        "featureTitle": "Activities",
        "featureDescClass": "feature_descShow",
        "desTitle": "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
        "img": tab1Img
    },
    {
        "featureBtnDivClass": "feature_bottomLeftBtn",
        "featuresTitleClass": "feature_LeftBtnTitle",
        "featureTitle": "Auto-Update feed",
        "featureDescClass": "feature_descShow",
        "desTitle": "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
        "img": tab2Img
    },
    {
        "featureBtnDivClass": "feature_bottomLeftBtn",
        "featuresTitleClass": "feature_LeftBtnTitle",
        "featureTitle": "Calendar",
        "featureDescClass": "feature_descShow",
        "desTitle": "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
        "img": tab3Img
    },
    {
        "featureBtnDivClass": "feature_bottomLeftBtn",
        "featuresTitleClass": "feature_LeftBtnTitle",
        "featureTitle": "Aggregator",
        "featureDescClass": "feature_descShow",
        "desTitle": "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
        "img": tab4Img
    },
    {
        "featureBtnDivClass": "feature_bottomLeftBtn",
        "featuresTitleClass": "feature_LeftBtnTitle",
        "featureTitle": "Alpha Search",
        "featureDescClass": "feature_descShow",
        "desTitle": "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
        "img": tab5Img
    },
]