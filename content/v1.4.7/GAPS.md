---
title: "Gap list — v1.4.7 facade pages without an English twin"
description: "The 15 hand-written facade pages that exist only in Chinese in the v1.4.7 tree, and the 8 that exist in both languages, listed by bucket and path."
---
# Gap list — English facade pages

The v1.4.7 tree carries **23 hand-written facade pages** across its two language trees. **8 have an
English page. 15 exist in Chinese only.** This file names every one of them by bucket and by path,
so the difference is a fact you can read rather than something you discover by hitting a 404.

Nothing here is scheduled, promised or partially written. A page is either on this list or it is
linked; there is no third state, and nothing on this list is generated — the 3,598 script-generated
pages that used to fill these directories were withdrawn into `_withdrawn/` and are not reachable
from any link in this tree.

## English page absent — 15 pages, Chinese only

Every English page that mentions one of these classes links to the Chinese page and labels it `zh`.
That is the on-disk truth, so that is what the link says.

| Bucket | Class | Chinese page | English path |
| --- | --- | --- | --- |
| `core` | `Module` | [zh `Module`](../zh/api/core/Module) | `en/api/core/Module` — absent |
| `core-extra` | `Game` | [zh `Game`](../zh/api/core-extra/Game) | `en/api/core-extra/Game` — absent |
| `core-extra` | `ViewModel` | [zh `ViewModel`](../zh/api/core-extra/ViewModel) | `en/api/core-extra/ViewModel` — absent |
| `engine` | `GauntletLayer` | [zh `GauntletLayer`](../zh/api/engine/GauntletLayer) | `en/api/engine/GauntletLayer` — absent |
| `engine` | `MBDebug` | [zh `MBDebug`](../zh/api/engine/MBDebug) | `en/api/engine/MBDebug` — absent |
| `gui` | `ScreenBase` | [zh `ScreenBase`](../zh/api/gui/ScreenBase) | `en/api/gui/ScreenBase` — absent |
| `gui` | `ScreenLayer` | [zh `ScreenLayer`](../zh/api/gui/ScreenLayer) | `en/api/gui/ScreenLayer` — absent |
| `gui` | `ScreenManager` | [zh `ScreenManager`](../zh/api/gui/ScreenManager) | `en/api/gui/ScreenManager` — absent |
| `mission` | `Agent` | [zh `Agent`](../zh/api/mission/Agent) | `en/api/mission/Agent` — absent |
| `mission` | `Mission` | [zh `Mission`](../zh/api/mission/Mission) | `en/api/mission/Mission` — absent |
| `mission` | `MissionBehavior` | [zh `MissionBehavior`](../zh/api/mission/MissionBehavior) | `en/api/mission/MissionBehavior` — absent |
| `mission` | `MissionState` | [zh `MissionState`](../zh/api/mission/MissionState) | `en/api/mission/MissionState` — absent |
| `save-system` | `SaveContext` | [zh `SaveContext`](../zh/api/save-system/SaveContext) | `en/api/save-system/SaveContext` — absent |
| `save-system` | `LoadContext` | [zh `LoadContext`](../zh/api/save-system/LoadContext) | `en/api/save-system/LoadContext` — absent |
| `save-system` | `SaveManager` | [zh `SaveManager`](../zh/api/save-system/SaveManager) | `en/api/save-system/SaveManager` — absent |

`en/api/save-system/` is not merely thin — **the directory does not exist at all.** All three
save-system pages live in the Chinese tree.

## Present in both languages — 8 pages

| Bucket | English page | Chinese twin |
| --- | --- | --- |
| `campaign` | [Campaign](../en/api/campaign/Campaign) | [zh `Campaign`](../zh/api/campaign/Campaign) |
| `campaign` | [CampaignBehaviorBase](../en/api/campaign/CampaignBehaviorBase) | [zh `CampaignBehaviorBase`](../zh/api/campaign/CampaignBehaviorBase) |
| `campaign` | [CampaignEvents](../en/api/campaign/CampaignEvents) | [zh `CampaignEvents`](../zh/api/campaign/CampaignEvents) |
| `campaign` | [CampaignGameStarter](../en/api/campaign/CampaignGameStarter) | [zh `CampaignGameStarter`](../zh/api/campaign/CampaignGameStarter) |
| `campaign` | [IFaction](../en/api/campaign/IFaction) | [zh `IFaction`](../zh/api/campaign/IFaction) |
| `campaign-ext` | [MBObjectBase](../en/api/campaign-ext/MBObjectBase) | [zh `MBObjectBase`](../zh/api/campaign-ext/MBObjectBase) |
| `campaign-ext` | [MBObjectManager](../en/api/campaign-ext/MBObjectManager) | [zh `MBObjectManager`](../zh/api/campaign-ext/MBObjectManager) |
| `core` | [MBSubModuleBase](../en/api/core/MBSubModuleBase) | [zh `MBSubModuleBase`](../zh/api/core/MBSubModuleBase) |

## Two buckets have no index page

`campaign-ext/` and `save-system/` are the only `api/` buckets with hand-written pages and no
`_index.md`. Pages in those two buckets say so in their parent line instead of linking to an index
that is not there. Every other `api/` bucket has an index page, including the ones whose index
stands for an empty bucket.

## Where to read more

- [SDK Overview](../en/architecture/sdk-overview) — which directory a namespace maps to, and what the
  generator's page counts mean now that the generated pages are withdrawn.
- [Version home](../) — the entry point for both language trees.