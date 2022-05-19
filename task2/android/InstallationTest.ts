import data from "../data";

const { I  } = inject();

Feature("App Installation @android");


Scenario("App is installed successfully", async () => {
    await I.seeAppIsInstalled(data.packageName);
});

Scenario("App is uninstalled successfully", async () => {
    await I.removeApp(data.packageName);
    await I.seeAppIsNotInstalled(data.packageName);
});
