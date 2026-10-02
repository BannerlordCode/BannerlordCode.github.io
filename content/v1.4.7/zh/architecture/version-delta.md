---
title: "版本差异 — 1.4.7 vs 1.4.5 vs 1.3.15"
description: "基于 bannerlord-1.3.15 / 1.4.5 / 1.4.7 三份源码实测的差异：哪些类型真的消失了、目录结构为什么变了、以及 v1.4.7 文档树自身的四处 URL 断裂。"
---
# 版本差异 — 1.4.7 vs 1.4.5 vs 1.3.15

这一页的数字全部来自对三份源码目录的实测扫描，不是从发布说明抄的。
先说方法，因为它决定了你该多信这些结论。

## 三份源码长什么样

| 版本 | 源码根目录 | `.cs` 数量 | 组织方式 |
| --- | --- | ---: | --- |
| 1.3.15 | `bannerlord-1.3.15/` | 5,196 | 直接按程序集分目录（55 个） |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/` | 8,583 | 两套并存：`Modules.{SandBox,StoryMode,Multiplayer,CustomBattle,BirthAndDeath,FastMode,Native}` 按命名空间分组 + `bin/<程序集>/` 按程序集 |
| 1.4.7 | `bannerlord-1.4.7/` | 11,387 | 纯按程序集分目录（96 个），无 `Modules.*` 分组 |

**这本身就是最大的"变化"：1.4.5 的源码转储是不完整的。**
`1.4.5/Bannerlord.Source/bin/` 里缺 35 个程序集目录，包括 `SandBox`、`StoryMode`、
`TaleWorlds.MountAndBlade.Multiplayer`、`TaleWorlds.MountAndBlade.View`、
`TaleWorlds.MountAndBlade.GauntletUI`、`TaleWorlds.MountAndBlade.CustomBattle`。
所以**不能**用 1.4.5 的这份转储去做"新增/删除类型"的全量统计 —— 差值全是转储缺口造成的假象。

## 能确定的结论

### 1. 从 1.3.15 到 1.4.7，没有游戏命名空间被删除

按"命名空间 + 简单类型名"做集合比较，排除 `System.*` / `Microsoft.*` / `Messages.*` / `Newtonsoft.*`
这些第三方与平台命名空间后：

- **消失的游戏命名空间：0 个。**
- **消失的类型：9 个。**

| 类型 | 命名空间 | 影响 |
| --- | --- | --- |
| `MapEventResultExplainer` | `TaleWorlds.CampaignSystem.MapEvents` | 地图事件结果提示，模组极少直接用 |
| `EquipmentFlags` | `TaleWorlds.Core` | 装备位标志枚举。**如果你的模组引用了它，需要改** |
| `BannerlordConfig` | `TaleWorlds.MountAndBlade.Diamond` | 平台层配置，普通模组不引用 |
| `Gatekeeper` | `TaleWorlds.MountAndBlade.Diamond` | 同上 |
| `InventoryData` | `TaleWorlds.MountAndBlade.Diamond` | 同上 |
| `OrderReturnButtonWidget` | `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order` | 命令撤退按钮的 widget |
| `FormationSpawnData` | `TaleWorlds.MountAndBlade` | 编队生成数据 |
| `MissionAgentSpawnLogic` | `TaleWorlds.MountAndBlade` | 任务内 Agent 生成逻辑。**战斗类模组需要检查** |
| `OpenGlLoadException` | `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` | 独立 2D 渲染器异常 |

另有 8 个类型在 `Messages.*`（Diamond 大厅 protobuf）里消失，与模组无关。

### 2. 1.4.5 → 1.4.7：在两边都存在的 361 个命名空间里，0 个类型被删

限定在两份转储都覆盖到的命名空间内比较：

| | 数量 |
| --- | ---: |
| 两边都有的命名空间 | 361 |
| **被删除的类型** | **0** |
| 新增的类型 | 482 |

482 个新增里有 **390 个是 `System.*` / BCL 噪声**（`System` 293、`System.Runtime.CompilerServices` 97），
`SandBox` 43 个、`TaleWorlds.MountAndBlade` 34 个、
`TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` 12 个。

**结论：1.4.5 → 1.4.7 对模组来说是纯增量，几乎零破坏。**

### 3. 两份转储都覆盖到的程序集，文件数变化极小

| 程序集 | 1.4.5 | 1.4.7 | Δ |
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

清一色 `+1` 到 `+22`，没有模块被裁掉。**"1.4.7 改了什么"这个问题，在 API 层面的答案是：
几乎什么都没删，加了一堆 1.3.x 时代没有的界面与视图类。**

### 4. 真正的新东西在 1.4.7 的目录结构里

1.4.7 相对 1.4.5 的 `bin/` 转储，多出 30 个程序集目录，全部属于**内容与界面层**：
`SandBox.*`（7 个）、`StoryMode.*`（5 个）、`TaleWorlds.MountAndBlade.Multiplayer*`（6 个）、
`TaleWorlds.MountAndBlade.GauntletUI*`（5 个）、`TaleWorlds.MountAndBlade.View`、
`TaleWorlds.MountAndBlade.CustomBattle`、`TaleWorlds.MountAndBlade.Launcher*`、
`TaleWorlds.MountAndBlade.Platform.PC`、`TaleWorlds.MountAndBlade.SteamWorkshop`、
`TaleWorlds.CampaignSystem.FastMode`、`…ViewModelCollection.BirthAndDeath`。

这批目录在 1.4.5 里**存在于 `Modules.*` 分组下、只是没被 `bin/` 转储覆盖**，
所以这是转储口径差异，不是 1.4.7 新增的 API。别把它当成新特性报告。

### 5. 文档树自身有 4 处 URL 断裂（这是 v1.4.7 文档的已知取舍）

v1.4.7 的 API 目录改用"一个命名空间只属于一个目录"的映射，因此有 4 处 1.4.5 URL 失效。
权威列表在 `tools/_dir-map-canonical.json` 的 `parityGaps[]`：

| `id` | 断掉的 URL | 页数 | 决定 |
| --- | --- | ---: | --- |
| `no-gameplay-bucket` | `1.4.5/gameplay/` → 无对应 | 19 | 接受。1.4.5 那个目录本身是混合的（`SandBox` + `StoryMode.*` + 裸 `TaleWorlds.MountAndBlade`），命名空间规则无法复现它。改为 `SandBox*` → `sandbox`、`StoryMode*` → `storymode` |
| `mission-bulk-to-mission-ext` | `1.4.5/mission/` 中 52 页 → `mission-ext/` | 52 | 接受。`mission/` 保留为只放 5 个入口类的刻意小目录 |
| `game-to-core-extra` | `1.4.5/core/Game.md` → `core-extra/Game.md` | 1 | 接受。`Game` 的命名空间是 `TaleWorlds.Core` |
| `missionstate-to-mission` | `1.4.5 mission-ext/MissionState.md` → `mission/MissionState.md` | 1 | 接受，为了和 `Mission` / `Agent` / `Formation` 放一起 |

**还有两个目录是被明确取消的，不要去找：**

- **没有 `navigationsystem/`。** `TaleWorlds.NavigationSystem` 在 1.4.7 里只剩一个程序集特性
  声明文件、零个公开类型，落到 `core-extra/`。1.4.5 树里本来也没有这个目录，所以这才是对齐。
- **没有 `gameplay/`。** 同上第一条。

## 升级检查清单

从 1.4.5 升到 1.4.7：

1. 编译一遍。九个消失类型里，先看 `EquipmentFlags` 和 `MissionAgentSpawnLogic` 有没有被你引用。
2. 如果你的模组里写了自定义 `*.GauntletUI.Widgets` 界面，确认没有直接继承
   `OrderReturnButtonWidget`。
3. 核对存档：新增字段用 `SyncData` 追加即可，1.4.5 → 1.4.7 没有类型删除导致的反序列化错位。

从 1.3.15 升到 1.4.7：

1. 同样先编译，重点看 `MissionAgentSpawnLogic`、`FormationSpawnData`。
2. 战斗模组要额外核对：1.4.x 把多人、CustomBattle、场景视图拆成了独立命名空间，
   `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.*` 一族的类型位置变了。
3. 逐类核对用 [跨版本类对比](../../../../versions/)。

## 参见

- ↔ [架构总览](../) · [SDK 总览](../sdk-overview)
- ↗ [跨版本类对比](../../../../versions/) · [v1.4.5 文档](../../../../v1.4.5/zh/architecture/) · [v1.3.15 文档](../../../../v1.3.15/zh/architecture/)
- ↑ [版本首页](../)