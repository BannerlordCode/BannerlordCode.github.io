---
title: Modder Journey
description: A roadmap from idea to implementation for new Bannerlord modders
---
# Modder Journey

## Mental Model

Treat `Modder Journey` as a guided quest: first decide which layer of the game you want to change, then find the right entry class, and finally hook your code into a SubModule.

The hardest part of starting out with Bannerlord modding usually isn't writing code. It's knowing where to begin. This page breaks "I want to make a mod" into five steps: pick a mod type, find the entry class, set up a SubModule skeleton, add your first example, and test everything. By the end you will have a minimal working mod.

## Before You Start

This page assumes you own Mount & Blade II: Bannerlord (v1.3.15 is recommended), have Visual Studio 2022 with the .NET desktop workload configured, and are comfortable with basic C# and XML. If you have not created a SubModule yet, read the [Getting Started Guide](../) first.

## Contents

1. [Decide What You Want to Do](#decide-what-you-want-to-do)
2. [Find the Entry Class](#find-the-entry-class)
3. [Set Up the SubModule Skeleton](#set-up-the-submodule-skeleton)
4. [Add Your First Behavior or Data](#add-your-first-behavior-or-data)
5. [Test and Save](#test-and-save)

---

## Decide What You Want to Do

Start by asking one question: what part of the game do you want to change? Most beginner projects fall into one of four categories.

| Type | Typical Idea | Recommended Starting Point |
|------|--------------|----------------------------|
| UI tweak | Add a menu button or show a notification | [Gauntlet UI System](../gauntlet-ui/) |
| Campaign behavior | Add events or change world-map logic | [Campaign System](../campaign-system/) |
| Mission logic | Custom combat rules, AI, or win conditions | [Mission System](../mission-system/) |
| Item or character data | Add new weapons, armor, or NPCs | [Asset Pipeline](../asset-pipeline/) and XML |

If you only want to tweak a value, such as making bows deal more damage, XML alone is enough and you don't need C#. If you want to listen to every Agent spawn and death during combat, you need a [`MissionBehavior`](../../api/mission/MissionBehavior/). If you want to run something every day on the world map, use a [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/).

## Find the Entry Class

Every kind of change has a hook class. Most of your code will inherit from one of these.

- The root entry point for any mod is [`MBSubModuleBase`](../../api/core/MBSubModuleBase/). It runs when the module loads and when the game starts.
- The mission layer uses [`Mission`](../../api/mission/Mission/) and [`MissionBehavior`](../../api/mission/MissionBehavior/). Battles, arenas, and sieges all live inside a mission.
- The campaign layer uses [`Campaign`](../../api/campaign/Campaign/) and [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/). The world map, clans, kingdoms, and settlements are here.
- The UI layer starts with [`GauntletMovie`](../../api/gui/GauntletMovie/) and [`ViewModel`](../../api/core-extra/ViewModel/).

Key campaign-world objects also include [`Hero`](../../../../versions/Hero/), [`MobileParty`](../../../../versions/MobileParty/), [`Settlement`](../../../../versions/Settlement/), [`Town`](../../../../versions/Town/), and [`Village`](../../../../versions/Village/). Find the entry class first, then look at which methods you can override. That tells you exactly where your code belongs.

## Set Up the SubModule Skeleton

Every mod type eventually registers through a subclass of `MBSubModuleBase`. Here is a minimal skeleton that handles three common hooks: module load, campaign start, and mission start.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

namespace MyModule
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            // Load custom assets or register global events here
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
            mission.AddMissionBehavior(new MyMissionLogic());
        }
    }
}
```

Make sure the `<SubModuleClassType>` value in `SubModule.xml` points to the fully qualified name of this class.

## Add Your First Behavior or Data

### Campaign Behavior Example

This simple behavior adds morale to the player's party every day on the world map.

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(
            this,
            OnDailyTickParty
        );
    }

    private void OnDailyTickParty(MobileParty party)
    {
        if (party == MobileParty.MainParty)
        {
            party.Morale += 1f;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Persist custom data here if needed
    }
}
```

### Mission Logic Example

If you want to give each player hero a small health boost when combat starts, use a `MissionBehavior`.

```csharp
public class MyMissionLogic : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionStart()
    {
        base.OnMissionStart();

        foreach (Agent agent in Mission.Current.Agents)
        {
            if (agent.IsHero && agent.Team == Mission.Current.PlayerTeam)
            {
                agent.Health = Math.Min(agent.Health + 10f, agent.HealthLimit);
            }
        }
    }

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
        // Track kills or trigger extra logic here
    }
}
```

### UI Notification Example

The lightest UI tweak is a message on the screen. You can drop this snippet into any behavior.

```csharp
MBInformationManager.AddQuickInformation(
    new InformationMessage("My mod is loaded", Colors.Green)
);
```

For more complex custom screens, see the [Gauntlet UI System](../gauntlet-ui/) examples that use `GauntletMovie` and `ScreenManager`.

### Data Changes

If you just want to add a new sword, you usually don't need C# at all. Append an item definition to `ModuleData/items.xml` and make sure `SubModule.xml` loads that XML file.

```xml
<Item id="my_steel_sword"
      name="{=my_steel_sword}Steel Sword"
      is_merchandise="true"
      value="200"
      weight="1.2"
      type="Item"
      subtype="one_handed_sword">
    <Weapon ... />
</Item>
```

For the full format, see the [Asset Pipeline](../asset-pipeline/). [`ItemObject`](../../../../versions/ItemObject/) is the runtime representation of items.

## Test and Save

After writing code, verify everything in this order.

1. Compile the DLL and fix any errors.
2. Copy the whole module folder into the game's `Modules/` directory, or configure Visual Studio to output there directly.
3. Launch the game, open `Modules` from the main menu, enable your mod, and start playing.
4. Press `F12` in game to open the Module Manager and confirm your mod loaded.
5. Add `Debug.Print("MyMod: loaded", 0, Debug.DebugColor.Green, 17592186044416UL);` somewhere in your code, then check `rgl_log.txt` for the output.

If your mod changes campaign data, don't forget about save compatibility. v1.3.15 uses the separate `TaleWorlds.SaveSystem`, so mark saveable classes with `[SaveableClass]` and fields with `[SaveableField]`. See the [Save System Guide](../save-system-guide/) for details.

---

## See Also

- [Getting Started Guide](../) - Environment setup and your first SubModule
- [Common Patterns](../common-patterns/) - Best practices for mod development
- [Game Systems Overview](../game-systems-overview/) - Learn what can be customized
- [SDK Overview](../../architecture/sdk-overview/) - Map of the SDK modules
- [MBSubModuleBase Reference](../../api/core/MBSubModuleBase/) - Module entry class
- [Campaign Reference](../../api/campaign/Campaign/) - Campaign system entry point
- [MissionBehavior Reference](../../api/mission/MissionBehavior/) - Mission behavior base class
- [GauntletMovie Reference](../../api/gui/GauntletMovie/) - UI entry class

---

## Where to Go Next

- [Common Patterns](../common-patterns/) — code organization, lifecycle, and events
- [Game Systems Overview](../game-systems-overview/) — match your goal to the right system
- [SDK Overview](../../architecture/sdk-overview/) — the layered SDK module map
- [Mission System](../mission-system/) — implement combat logic in `Mission` and `MissionBehavior`
