/**
 * Copyright (C) 2020 to the present, Crestron Electronics, Inc.
 * All rights reserved.
 * No part of this software may be reproduced in any form, machine
 * or natural, without the express written consent of Crestron Electronics.
 * Use of this source code is subject to the terms of the Crestron Software License Agreement 
 * under which you licensed this source code.  
 *
 * This code was automatically generated by Crestron's code generation tool.
 */
/* jslint es6 */

const directTvModule = (function () {
    'use strict';

    /**
     * Set the Default TriggerView Tab as the first tab
     * @param {*} index 
     */
    function setActive(activeIndex, inactiveIndex, activeButton, inactiveButton) {
        document.getElementById(activeButton).classList.add("selected");
        document.getElementById(inactiveButton).classList.remove("selected");
        document.getElementById(activeIndex).classList.remove("ch5-hide-vis");
        document.getElementById(inactiveIndex).classList.add("ch5-hide-vis");
    }

    /**
     * Get the display index value from the Horizontal/Vertical Present Screen
     * @param {*} currentDisplayIndex 
     */
    function setDisplayIndex(currentDisplayIndex) {
        showOnlyOneWidget("directTvKeysPanel1Index", currentDisplayIndex);
        showOnlyOneWidget("directTvNumberKeypadPanel1Index", currentDisplayIndex);
        showOnlyOneWidget("directTvColorButtonsIndex", currentDisplayIndex);
        showOnlyOneWidget("directTvKeysPanel2Index", currentDisplayIndex);
        showOnlyOneWidget("directTvPanelOneButtonTwoIndex", currentDisplayIndex);        
    }

    /**
     * Generic method to display by widgetId and selected index
     * @param {*} widgetIdWithoutIndex 
     * @param {*} currentDisplayIndex 
     */
    function showOnlyOneWidget(widgetIdWithoutIndex, currentDisplayIndex) {
        const displayCount = parseInt(sourceSelectionModule.NUMBER_OF_DISPLAYS);
        for (let i = 0; i < displayCount; i++) {
            let widget = document.getElementById(widgetIdWithoutIndex + i);
            widget.classList.add("hide-div");
        }
        let newWidget = document.getElementById(widgetIdWithoutIndex + currentDisplayIndex);
        newWidget.classList.remove("hide-div");
    }

    /**
     * All public method and properties are exported here
     */
    return {
        setActive,
        setDisplayIndex
    };    

}());