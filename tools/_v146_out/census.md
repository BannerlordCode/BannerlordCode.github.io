# v1.4.6 手写 / 生成页面对账（markdown 层）

工具：`node tools/_v146_census.mjs`（只读；`content/` 冻结中，产物写在 `tools/_v146_out/`）

## 判定方法

**判据 A — 生成器指纹（只看本工具自己写下的稳定字符串）**

- contains "generated-by: tools/_v146_stubs.mjs"
- contains the legacy batch-draft sentence (pre-freeze generator)
- has a **Bucket:** `dir` (rule) line AND the generated member-table header "| 成员 | 签名 | 种类 |" / "| Member | Signature | Kind |"

**判据 B — 手写深写页（与生成器字符串完全无关）**

- has an H2 概述 / Overview section
- has an H2 心智模型 / Mental Model section
- AND (has a risk/boundary H2 heading, or a csharp fence with >= 3 non-comment lines and a .Method( call and no banned placeholder)
- note: the risk test is a HEADING match only; the word "risk" appearing in prose does not count

**交叉表**

| | B: deep | B: shallow |
| --- | --- | --- |
| A: 有生成器指纹 | 手写深写页（指纹来自被覆盖前的旧版，见下） | 生成页 |
| A: 无生成器指纹 | 手写深写页 | 其它（版本首页、架构页、worker 中间产物） |

## 总数（按语言）

| 语言 | 页面总数 | 手写深写 | 生成 | 其它 | 叶子手写 | 叶子生成 |
| --- | --- | --- | --- | --- | --- | --- |
| zh | 6230 | 32 | 6192 | 6 | 32 | 6173 |
| en | 6210 | 0 | 6204 | 6 | 0 | 6185 |

## 按桶

| 桶 | 页面 | 生成 | 手写 | 其它 |
| --- | --- | --- | --- | --- |
| `mission-ext` | 3710 | 3710 | 0 | 0 |
| `sandbox` | 2350 | 2350 | 0 | 0 |
| `campaign-ext` | 1194 | 1192 | 2 | 0 |
| `campaign` | 1183 | 1180 | 3 | 0 |
| `viewmodel` | 1076 | 1076 | 0 | 0 |
| `core-extra` | 903 | 887 | 16 | 0 |
| `core` | 456 | 454 | 2 | 0 |
| `gui` | 456 | 454 | 2 | 0 |
| `engine` | 383 | 382 | 1 | 0 |
| `storymode` | 334 | 334 | 0 | 0 |
| `save-system` | 114 | 110 | 4 | 0 |
| `custombattle` | 80 | 80 | 0 | 0 |
| `network` | 68 | 68 | 0 | 0 |
| `localization` | 44 | 43 | 1 | 0 |
| `system` | 30 | 30 | 0 | 0 |
| `modulemanager` | 18 | 18 | 0 | 0 |
| `activitysystem` | 14 | 14 | 0 | 0 |
| `achievementsystem` | 10 | 10 | 0 | 0 |
| `mission` | 5 | 4 | 1 | 0 |
| `_index.md` | 4 | 0 | 0 | 4 |
| `module-map.md` | 2 | 0 | 0 | 2 |
| `sdk-overview.md` | 2 | 0 | 0 | 2 |
| `version-delta.md` | 2 | 0 | 0 | 2 |

## 40 条保留深写路径的归属

| owner | 路径 | 存在 | 判定 | 判据 | 字节 |
| --- | --- | --- | --- | --- | --- |
| worker-12 | `zh/api/core/MBSubModuleBase.md` | Y | handwritten-deep | A=none / B=deep | 14382 |
| worker-12 | `en/api/core/MBSubModuleBase.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/core/Module.md` | Y | handwritten-deep | A=none / B=deep | 15598 |
| worker-12 | `en/api/core/Module.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/core-extra/Game.md` | Y | handwritten-deep | A=none / B=deep | 18960 |
| worker-12 | `en/api/core-extra/Game.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/core-extra/GameStateManager.md` | Y | handwritten-deep | A=none / B=deep | 14161 |
| worker-12 | `en/api/core-extra/GameStateManager.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/core-extra/GameManagerBase.md` | Y | handwritten-deep | A=none / B=deep | 15752 |
| worker-12 | `en/api/core-extra/GameManagerBase.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/core-extra/ViewModel.md` | Y | handwritten-deep | A=none / B=deep | 14382 |
| worker-12 | `en/api/core-extra/ViewModel.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/core-extra/InformationManager.md` | Y | handwritten-deep | A=none / B=deep | 13583 |
| worker-12 | `en/api/core-extra/InformationManager.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/localization/TextObject.md` | Y | handwritten-deep | A=none / B=deep | 13974 |
| worker-12 | `en/api/localization/TextObject.md` | Y | generated | A=marker / B=shallow | 4562 |
| worker-12 | `zh/api/save-system/SaveManager.md` | Y | handwritten-deep | A=none / B=deep | 9424 |
| worker-12 | `en/api/save-system/SaveManager.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/save-system/SaveableTypeDefiner.md` | Y | handwritten-deep | A=none / B=deep | 13173 |
| worker-12 | `en/api/save-system/SaveableTypeDefiner.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/save-system/SaveableFieldAttribute.md` | Y | handwritten-deep | A=none / B=deep | 5825 |
| worker-12 | `en/api/save-system/SaveableFieldAttribute.md` | N | MISSING | - | 0 |
| worker-12 | `zh/api/save-system/SaveablePropertyAttribute.md` | Y | handwritten-deep | A=none / B=deep | 5345 |
| worker-12 | `en/api/save-system/SaveablePropertyAttribute.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/Campaign.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/campaign/Campaign.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/CampaignGameStarter.md` | Y | handwritten-deep | A=none / B=deep | 12292 |
| worker-20 | `en/api/campaign/CampaignGameStarter.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/CampaignBehaviorBase.md` | Y | handwritten-deep | A=none / B=deep | 7297 |
| worker-20 | `en/api/campaign/CampaignBehaviorBase.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/CampaignEvents.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/campaign/CampaignEvents.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/IDataStore.md` | Y | handwritten-deep | A=none / B=deep | 6161 |
| worker-20 | `en/api/campaign/IDataStore.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/Hero.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/campaign/Hero.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign/Settlement.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/campaign/Settlement.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign-ext/MBObjectManager.md` | Y | handwritten-deep | A=none / B=deep | 17031 |
| worker-20 | `en/api/campaign-ext/MBObjectManager.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/campaign-ext/MBObjectBase.md` | Y | handwritten-deep | A=none / B=deep | 10793 |
| worker-20 | `en/api/campaign-ext/MBObjectBase.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/mission/Mission.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/mission/Mission.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/mission/MissionBehavior.md` | Y | handwritten-deep | A=none / B=deep | 18896 |
| worker-20 | `en/api/mission/MissionBehavior.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/mission/Agent.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/mission/Agent.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/mission/Formation.md` | N | MISSING | - | 0 |
| worker-20 | `en/api/mission/Formation.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/gui/ScreenManager.md` | Y | handwritten-deep | A=none / B=deep | 17018 |
| worker-20 | `en/api/gui/ScreenManager.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/gui/ScreenBase.md` | Y | handwritten-deep | A=none / B=deep | 13597 |
| worker-20 | `en/api/gui/ScreenBase.md` | N | MISSING | - | 0 |
| worker-20 | `zh/api/engine/GauntletLayer.md` | Y | handwritten-deep | A=none / B=deep | 11908 |
| worker-20 | `en/api/engine/GauntletLayer.md` | N | MISSING | - | 0 |
| worker-12-next-batch | `zh/api/core-extra/ItemObject.md` | Y | generated | A=marker / B=shallow | 8393 |
| worker-12-next-batch | `en/api/core-extra/ItemObject.md` | Y | generated | A=marker / B=shallow | 8525 |
| worker-12-next-batch | `zh/api/core-extra/Equipment.md` | Y | handwritten-deep | A=none / B=deep | 18958 |
| worker-12-next-batch | `en/api/core-extra/Equipment.md` | Y | generated | A=marker / B=shallow | 6734 |
| worker-12-next-batch | `zh/api/core-extra/WeaponComponent.md` | Y | handwritten-deep | A=none / B=deep | 10335 |
| worker-12-next-batch | `en/api/core-extra/WeaponComponent.md` | Y | generated | A=marker / B=shallow | 2867 |
| worker-12-next-batch | `zh/api/core-extra/SkillObject.md` | Y | handwritten-deep | A=none / B=deep | 8350 |
| worker-12-next-batch | `en/api/core-extra/SkillObject.md` | Y | generated | A=marker / B=shallow | 2672 |
| worker-12-next-batch | `zh/api/core-extra/Crafting.md` | Y | handwritten-deep | A=none / B=deep | 19400 |
| worker-12-next-batch | `en/api/core-extra/Crafting.md` | Y | generated | A=marker / B=shallow | 5476 |
| worker-12-next-batch | `zh/api/core-extra/BodyProperties.md` | Y | handwritten-deep | A=none / B=deep | 12752 |
| worker-12-next-batch | `en/api/core-extra/BodyProperties.md` | Y | generated | A=marker / B=shallow | 3747 |
| worker-12-next-batch | `zh/api/core-extra/Banner.md` | Y | handwritten-deep | A=none / B=deep | 16754 |
| worker-12-next-batch | `en/api/core-extra/Banner.md` | Y | generated | A=marker / B=shallow | 6104 |
| worker-12-next-batch | `zh/api/core-extra/GameModel.md` | Y | handwritten-deep | A=none / B=deep | 6340 |
| worker-12-next-batch | `en/api/core-extra/GameModel.md` | Y | generated | A=marker / B=shallow | 2022 |
| worker-12-next-batch | `zh/api/core-extra/GameModelsManager.md` | Y | handwritten-deep | A=none / B=deep | 7454 |
| worker-12-next-batch | `en/api/core-extra/GameModelsManager.md` | Y | generated | A=marker / B=shallow | 2197 |
| worker-12-next-batch | `zh/api/core-extra/ParameterContainer.md` | Y | handwritten-deep | A=none / B=deep | 10544 |
| worker-12-next-batch | `en/api/core-extra/ParameterContainer.md` | Y | generated | A=marker / B=shallow | 3734 |
| worker-12-next-batch | `zh/api/core-extra/BindingPath.md` | Y | handwritten-deep | A=none / B=deep | 11056 |
| worker-12-next-batch | `en/api/core-extra/BindingPath.md` | Y | generated | A=marker / B=shallow | 3466 |
| worker-12-next-batch | `zh/api/core-extra/EventBase.md` | Y | handwritten-deep | A=none / B=deep | 6159 |
| worker-12-next-batch | `en/api/core-extra/EventBase.md` | Y | generated | A=marker / B=shallow | 2011 |

> 冻结后本工具不再写 `content/`，也不删除任何文件。撤回与否由 lead 裁决。
