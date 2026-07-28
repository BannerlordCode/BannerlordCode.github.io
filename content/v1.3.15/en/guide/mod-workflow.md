---
title: Mod Development Workflow
description: A repeatable Bannerlord mod workflow from environment setup to Nexus/Vortex distribution.
---
# Mod Development Workflow

This page breaks "write a working Bannerlord mod" into repeatable steps. It takes about ten minutes to read and gives you enough to build your first loadable module.

---

## Environment setup

### Recommended tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Visual Studio 2022 Community | C# project, debugging, references | Install the `.NET desktop development` workload |
| VS Code + C# Dev Kit | Lightweight alternative | Configure MSBuild and game references by hand |
| .NET Framework 4.7.2 / 4.8 | Runtime target | Same runtime the game uses |
| Bannerlord Launcher / BLSE | Load mods | BLSE can skip the official launcher during testing |

### Configure game references

Create a `Class Library (.NET Framework)` project, then reference assemblies from your game folder:

```
C:\Program Files (x86)\Steam\steamapps\common\
Mount & Blade II Bannerlord\
  ├── bin\Win64_Shipping_Client\TaleWorlds.*.dll
  └── Modules\Native\bin\Win64_Shipping_Client\TaleWorlds.*.dll
```

Core assemblies:

- `TaleWorlds.Core`
- `TaleWorlds.Library`
- `TaleWorlds.MountAndBlade`
- `TaleWorlds.CampaignSystem`
- `TaleWorlds.Engine`
- `TaleWorlds.SaveSystem` (if you persist data)

Set `Copy Local` to `False` so you do not ship official DLLs.

> With BLSE, add `--module MyModule` in Steam launch options. Otherwise enable the module in the official launcher.

---

## Minimal module folder layout

The game expects a fixed layout under `Modules\MyModule\`. Copy your build output there for testing:

```
Mount & Blade II Bannerlord\Modules\MyModule\
├── SubModule.xml                          # module manifest
├── bin\Win64_Shipping_Client\
│   └── MyModule.dll                       # your game library
├── ModuleData\
│   ├── items.xml                          # custom items (optional)
│   └── lang\
│       └── strings_EN.xml                 # localization (optional)
└── Assets\                                # meshes, textures, sounds (optional)
```

Example `SubModule.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="MyModule"/>
  <Id value="MyModule"/>
  <Version value="1.0.0"/>
  <DefaultModule>
    <Xmls>
      <XmlNode path="ModuleData/items"/>
    </Xmls>
  </DefaultModule>
  <Dlls>
    <DllInfo>
      <AssemblyFile>MyModule.dll</AssemblyFile>
      <SubModuleClassType>MyModule.MySubModule</SubModuleClassType>
    </DllInfo>
  </Dlls>
</Module>
```

Key fields:

- `<Id>`: unique module identifier; sets config paths and Vortex dependency names.
- `<Version>`: use semantic versioning so players can check compatibility.
- `<SubModuleClassType>`: must be `Namespace.ClassName`, exactly matching the C# class.

---

## Starter SubModule.cs

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

namespace MyModule
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            InformationManager.DisplayMessage(
                new InformationMessage("MyModule loaded"));
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarter)
        {
            base.OnGameStart(game, gameStarter);
            if (gameStarter is CampaignGameStarter campaignStarter)
            {
                campaignStarter.AddBehavior(new MyCampaignBehavior());
            }
        }

        public override void OnMissionBehaviorInitialize(Mission mission)
        {
            base.OnMissionBehaviorInitialize(mission);
            mission.AddMissionBehavior(new MyMissionBehavior());
        }
    }
}
```

`OnGameStart` uses `IGameStarter`, not `GameStarter`. For campaign logic check `CampaignGameStarter`; for missions add a `MissionBehavior` in `OnMissionBehaviorInitialize`.

---

## Adding a CampaignBehavior

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

namespace MyModule.Campaign
{
    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        [SaveableField(1)]
        private int _customCounter = 0;

        public override void RegisterEvents()
        {
            CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
        }

        private void OnDailyTick()
        {
            _customCounter++;
            InformationManager.DisplayMessage(
                new InformationMessage($"Daily tick #{_customCounter}"));
        }

        public override void SyncData(IDataStore dataStore) { }
    }
}
```

Subscribe to `CampaignEvents` in `RegisterEvents`; use `SyncData` for cross-save state. Mark persistent fields with `[SaveableField]` and declare a dependency on `TaleWorlds.SaveSystem` in `SubModule.xml`. See the [Save System Guide](../save-system-guide) for details.

---

## Adding a MissionBehavior

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule.Missions
{
    public class MyMissionBehavior : MissionBehavior
    {
        public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

        public override void OnMissionStart()
        {
            base.OnMissionStart();
            InformationManager.DisplayMessage(
                new InformationMessage("Mission started"));
        }

        public override void OnAgentCreated(Agent agent)
        {
            base.OnAgentCreated(agent);
        }

        public override void OnMissionEnded()
        {
            base.OnMissionEnded();
        }
    }
}
```

`BehaviorType` is required. `Logic` tells the engine this is a logic module; `Other` is a general extension. Hooks are plentiful: Agent create/death, missile collision, mission start/end, and more.

---

## Testing and reviewing logs

### Local test loop

1. Build the project.
2. Copy `bin\Win64_Shipping_Client\MyModule.dll` into `Modules\MyModule\bin\Win64_Shipping_Client\`.
3. Launch the game with the official launcher or BLSE.
4. Check `Mods` on the main menu and enable `MyModule`.
5. Enter campaign or a battle and watch in-game messages and logs.

### Log locations

```
C:\Users\<username>\Documents\Mount & Blade II Bannerlord\logs\
├── rgl_log.txt                  # main engine log
├── mod_logs\                    # per-mod logs (written by some frameworks)
└── crash_dumps\                 # crash dumps
```

Troubleshooting map:

| Symptom | Look at |
|---------|---------|
| Module not visible | `rgl_log.txt` for module Id, check `SubModule.xml` path and class name |
| Startup error | XML syntax, DLL dependency versions, MissingMethodException |
| Behavior not firing | Add an `InformationManager.DisplayMessage` in `OnGameStart` or `OnMissionBehaviorInitialize` to confirm execution |
| Crash | Top of `rgl_log.txt` stack and the last managed call |

### Debugging

- Use Visual Studio `Debug → Attach to Process` on `Bannerlord.exe`.
- Set breakpoints inside `OnSubModuleLoad` or behavior events.
- If startup is slow, configure BLSE to load only your module.

---

## Packaging and publishing

### Prepare the release archive

1. Update `<Version>` in `SubModule.xml`.
2. Strip pdb/unnecessary files from `bin` (keep the DLL).
3. Zip the whole `Modules\MyModule` folder as `MyModule-v1.0.0.zip`.
4. Keep the `MyModule\` folder at the zip root so Vortex recognizes it automatically.

### NexusMods / Vortex

- Upload the zip to NexusMods and state the supported Bannerlord version.
- Vortex installs zip files with drag-and-drop into `Modules\MyModule\`.
- List any dependency mods in the description.

---

## Next steps

- [Common Patterns](../common-patterns/) — code organization, naming, performance, and safe practices
- [Game Systems Overview](../game-systems-overview/) — choose among Mission, Campaign, UI, and SaveSystem
- [Modder Journey](../modder-journey/) — from idea to full release checklist
- [Native Interop](../../architecture/native-interop/) — understand the managed-to-native boundary
- [Save System Guide](../save-system-guide/) — persist custom data across game versions

<!-- BEGIN SECTION INDEX -->

## ↑ Parent navigation

- [Version Home ../](../)
- [Getting Started Guide ./](./)

## ↓ Child pages

- [Common Patterns](../common-patterns)
- [Game Systems Overview](../game-systems-overview)
- [Modder Journey](../modder-journey)
- [Native Interop](../../architecture/native-interop)
- [Save System Guide](../save-system-guide)

<!-- END SECTION INDEX -->