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

var templateVersionInfoModule = (function () {
    'use strict';

    let appName = null;
    let appVersion = null;
    let errorClass = "version-error";
    let appInfo = {
        name: "",
        version: "",
        CrComLibVersion: "",
        CrComBuildDate: ""
    };

    /**
     * Initialize Method
     */
    function onInit() {
        getAppVersionInfo();
        versionInformation();
    }

    /**
     * Fetch app version info from manifest file.
     */
    function getAppVersionInfo() {
        serviceModule.loadJSON("./assets/data/app.manifest.json", (response) => {
            response = JSON.parse(response);
            appName = response.appName;
            appVersion = response.appVersion;
            appInfo.name = appName;
            appInfo.version = appVersion;

            let _appVersionEl = document.getElementById("appVersion");
            if (!!appName && !!appVersion) {
                let _successMessage = `${appName} Version: ${appVersion}`;
                if (!!_appVersionEl) {
                    _appVersionEl.classList.remove(errorClass);
                    _appVersionEl.innerHTML = _successMessage;
                }
            } else {
                if (!!_appVersionEl) {
                    _appVersionEl.classList.add(errorClass);
                    _appVersionEl.innerHTML = `Error: While fetching sample project version.`;
                }
            }
        });
    }

    /**
     * Display Crestron Component Library version information using
     * ch5-modal-dialog.
     */
    function versionInformation() {
        let _crComLibVersion = CrComLib.version;
        let _crComBuildDate = CrComLib.buildDate;
        appInfo.CrComLibVersion = CrComLib.version;
        appInfo.CrComBuildDate = CrComLib.buildDate;

        let _versionEl = document.getElementById("versionDescription");
        if (!!_crComLibVersion && !!_crComBuildDate) {
            let _successMessage = `Crestron Component Library<span>Version: ${_crComLibVersion}</span><span>Build date: ${_crComBuildDate}</span>`;
            if (!!_versionEl) {
                _versionEl.classList.remove(errorClass);
                _versionEl.innerHTML = _successMessage;
            }
        } else {
            if (!!_versionEl) {
                _versionEl.classList.add(errorClass);
                _versionEl.innerHTML = `Error: While fetching crestron component library version.`;
            }
        }
    }

    /**
     * 
     */
    function getAppInfo() {
        return appInfo;
    }

    document.addEventListener("DOMContentLoaded", onInit);

    /**
     * All public method and properties are exported here
     */
    return {
        getAppInfo
    };

})();