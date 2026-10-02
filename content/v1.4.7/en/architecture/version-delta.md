---
title: "Version Delta — 1.4.7 vs 1.4.5 vs 1.3.15"
description: "Measured from three source trees: which types actually disappeared, why the directory layout changed, and the four known URL breaks in the v1.4.7 doc tree."
---
# Version Delta — 1.4.7 vs 1.4.5 vs 1.3.15

Every number on this page comes from scanning the three source trees directly, not from release
notes. Read the method first, because it determines how much you should trust the conclusions.

## What the three source trees look like

| Version | Root | `.cs` files | Organisation |
| --- | --- | ---: | --- |
| 1.3.15 | `bannerlord-1.3.15/` | 5,196 | Directly by assembly (55 directories) |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/` | 8,583 | Two parallel layouts: `Modules.{SandBox,StoryMode,Multiplayer,CustomBattle,BirthAndDeath,FastMode,Native}` grouped by namespace, plus `bin/<assembly>/` by assembly |
| 1.4.7 | `bannerlord-1.4.7/` | 11,387 | Purely by assembly (96 directories), no `Modules.*` grouping |

**That itself is the biggest change: the 1.4.5 source dump is incomplete.**
`1.4.5/Bannerlord.Source/bin/` is missing 35 assembly directories, including `SandBox`,
`StoryMode`, `TaleWorlds.MountAndBlade.Multiplayer`, `TaleWorlds.MountAndBlade.View`,
`TaleWorlds.MountAndBlade.GauntletUI` and `TaleWorlds.MountAndBlade.CustomBattle`. So you
**cannot** compute whole-tree "types added / removed" from that 1.4.5 dump — the differences would
all be dump-coverage artefacts.

## What can be stated with confidence

### 1. From 1.3.15 to 1.4.7, no game namespace was removed

Comparing (namespace, simple type name) sets and excluding `System.*` / `Microsoft.*` / `Messages.*`
/ `Newtonsoft.*`:

- **Game namespaces that disappeared: 0.**
- **Types that disappeared: 9.**

| Type | Namespace | Impact |
| --- | --- | --- |
| `MapEventResultExplainer` | `TaleWorlds.CampaignSystem.MapEvents` | map-event result tooltip; mods rarely touch it |
| `EquipmentFlags` | `TaleWorlds.Core` | equipment-slot flag enum. **Check your mod if you reference it** |
| `BannerlordConfig` | `TaleWorlds.MountAndBlade.Diamond` | platform-layer config, not mod API |
| `Gatekeeper` | `TaleWorlds.MountAndBlade.Diamond` | same |
| `InventoryData` | `TaleWorlds.MountAndBlade.Diamond` | same |
| `OrderReturnButtonWidget` | `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order` | the order-retreat button widget |
| `FormationSpawnData` | `TaleWorlds.MountAndBlade` | formation spawn data |
| `MissionAgentSpawnLogic` | `TaleWorlds.MountAndBlade` | in-mission agent spawn logic. **Battle mods must check** |
| `OpenGlLoadException` | `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` | standalone 2D renderer exception |

A further 8 types disappeared from `Messages.*` (Diamond lobby protobuf), unrelated to mods.

### 2. 1.4.5 → 1.4.7: zero types removed across the 361 namespaces both dumps cover

Restricted to namespaces present in both dumps:

| | Count |
| --- | ---: |
| Namespaces in both | 361 |
| **Types removed** | **0** |
| Types added | 482 |

Of the 482 additions, **390 are `System.*` / BCL noise** (`System` 293,
`System.Runtime.CompilerServices` 97), plus `SandBox` 43, `TaleWorlds.MountAndBlade` 34 and
`TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` 12.

**So 1.4.5 → 1.4.7 is purely additive for mod authors, with essentially no breakage.**

### 3. Where both dumps have an assembly, the file counts barely moved

| Assembly | 1.4.5 | 1.4.7 | Δ |
| --- | ---: | ---: | ---: |
| `TaleWorlds.CampaignSystem` | 1,207 | 1,229 | +22 |
| `TaleWorlds.MountAndBlade` | 1,025 | 1,029 | +4 |
| `TaleWorlds.Library` | 196 | 199 | +3 |
| `TaleWorlds.Engine` | 173 | 175 | +2 |
| `TaleWorlds.Core` | 231 | 233 | +2 |
| `TaleWorlds.DotNet` | 50 | 51 | +1 |
| `TaleWorlds.Network` | 42 | 44 | +2 |
| `TaleWorlds.TwoDimension` | 56 | 58 | +2 |
| `TaleWorlds.GauntletUI` | 108 | 110 | +2 |

Uniformly `+1` to `+22`. No module was cut. **The honest answer to "what changed in 1.4.7" is:
almost nothing was deleted, and a lot of screen and view classes appeared that did not exist in
the 1.3.x line.**

### 4. The genuinely new material shows up in the 1.4.7 directory layout

Compared with 1.4.5's `bin/` dump, 1.4.7 has 30 assembly directories that the dump lacks — all of
them content and UI layers: `SandBox.*` (7), `StoryMode.*` (5),
`TaleWorlds.MountAndBlade.Multiplayer*` (6), `TaleWorlds.MountAndBlade.GauntletUI*` (5),
`TaleWorlds.MountAndBlade.View`, `TaleWorlds.MountAndBlade.CustomBattle`,
`TaleWorlds.MountAndBlade.Launcher*`, `TaleWorlds.MountAndBlade.Platform.PC`,
`TaleWorlds.MountAndBlade.SteamWorkshop`, `TaleWorlds.CampaignSystem.FastMode`,
`…ViewModelCollection.BirthAndDeath`.

These directories **did** exist in 1.4.5 under the `Modules.*` grouping — the `bin/` dump simply
never covered them. So this is a dump-scope difference, **not** a 1.4.7 feature. Do not report it
as one.

### 5. The 1.4.7 doc tree itself breaks 4 URLs on purpose

The 1.4.7 API directories use a "one namespace, one directory" mapping, which breaks four 1.4.5
URLs. The authoritative list is `tools/_dir-map-canonical.json` → `parityGaps[]`:

| `id` | Broken URL | Pages | Decision |
| --- | --- | ---: | --- |
| `no-gameplay-bucket` | `1.4.5/gameplay/` → none | 19 | Accepted. That 1.4.5 directory is itself mixed (`SandBox` + `StoryMode.*` + bare `TaleWorlds.MountAndBlade`), so no namespace rule can reproduce it. `SandBox*` → `sandbox` and `StoryMode*` → `storymode` instead |
| `mission-bulk-to-mission-ext` | 52 of `1.4.5/mission/` → `mission-ext/` | 52 | Accepted. `mission/` stays a deliberately small directory holding only 5 entry classes |
| `game-to-core-extra` | `1.4.5/core/Game.md` → `core-extra/Game.md` | 1 | Accepted. `Game` is in namespace `TaleWorlds.Core` |
| `missionstate-to-mission` | `1.4.5 mission-ext/MissionState.md` → `mission/MissionState.md` | 1 | Accepted, to sit next to `Mission` / `Agent` / `Formation` |

**Two directories are cancelled outright — do not go looking for them:**

- **No `navigationsystem/`.** In 1.4.7, `TaleWorlds.NavigationSystem` is down to an
  assembly-attribute file with zero public types, so it resolves into `core-extra/`. The 1.4.5 tree
  has no such directory either, so this *is* the parity.
- **No `gameplay/`.** Same as the first row of the table.

## Upgrade checklist

1.4.5 → 1.4.7:

1. Compile. Of the nine removed types, check `EquipmentFlags` and `MissionAgentSpawnLogic` first.
2. If you wrote custom `*.GauntletUI.Widgets` screens, confirm you never subclassed
   `OrderReturnButtonWidget`.
3. Check your saves: adding fields through `SyncData` is enough — with no types removed between
   these two versions, there is no deserialisation skew to fix.

1.3.15 → 1.4.7:

1. Compile again, focusing on `MissionAgentSpawnLogic` and `FormationSpawnData`.
2. Battle mods check one more thing: 1.4.x split multiplayer, custom battle and mission views into
   their own namespaces, so `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.*` and friends moved.
3. Verify class by class using [Cross-Version Class Comparison](../../../../versions/).

## See also

- ↔ [Architecture hub](../) · [SDK Overview](../sdk-overview)
- ↗ [Cross-Version Class Comparison](../../../../versions/) · [v1.4.5 docs](../../../../v1.4.5/en/architecture/) · [v1.3.15 docs](../../../../v1.3.15/en/architecture/)
- ↑ [Version home](../)