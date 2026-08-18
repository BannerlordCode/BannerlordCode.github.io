---
title: "CampaignOptions"
description: "集中存放战役难度与玩家偏好的可序列化状态对象（铁人模式、生命死亡循环开关、自动分配专长，以及战斗伤害、招募、地图移速、潜行伪装、战斗 AI、说服成功率、家族成员死亡、战斗死亡九项难度档位与游戏加速模式），由 Campaign 在构造时创建并通过 Campaign.Current.Options 持有，设置界面与多个规则模型在运行时读写。"
---

# CampaignOptions

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** public class CampaignOptions
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignOptions.cs

## 概述

它是一份战役级的“玩家设置”快照：保存铁人模式、生命/死亡循环开关、自动分配家族成员专长，以及战斗伤害、招募、地图移速、潜行伪装、战斗 AI、说服成功率、家族成员死亡概率、战斗死亡这九项难度档位，外加游戏加速模式。战役模拟中的多个规则模型（如 `DefaultDifficultyModel`、`DefaultPartyHealingModel`）在裁决时读取这些档位，而游戏设置界面与战役加载流程负责写入。

## 心智模型

CampaignOptions 不是 Model 型扩展点，而是一份被 Campaign 持有的状态对象：Campaign 在构造时（`Campaign.cs` 第 565 行）用 `new CampaignOptions()` 创建它，并以 `public readonly CampaignOptions Options` 字段（`Campaign.cs` 第 97 行）挂在 `Campaign.Current.Options` 上，随战役一起被 SaveSystem 序列化。它属于 Campaign 层，仅在战役运行期存在；绝大多数成员通过静态属性（如 `CampaignOptions.IsIronmanMode`）对外暴露，这些属性内部只是 `Campaign.Current?.Options` 的薄封装，因此你无需、也不应自行 `new` 一份——直接读 `CampaignOptions.X` 或 `Campaign.Current.Options` 即可。要改设置请走游戏设置界面或这些静态 setter（它们会在 `_current` 非空时回写到当前战役的实例），不要在 Mission 层、主菜单或战役加载前访问；确实需要持久化新偏好时，请给字段加 `[SaveableField]` 而非普通字段，否则该值在存读档后会丢失。

## 何时使用 / 何时不要使用

- **使用**：在战役运行期需要读取玩家难度档位或偏好（如判断铁人模式以禁用快速存档、按 `BattleDeath` 决定英雄是否可在战斗中阵亡、按加速模式缩短怀孕天数）时，读取 `CampaignOptions.X` 静态属性或 `Campaign.Current.Options`；需要由代码切换某个设置时，直接给对应静态属性赋值（前提是战役已加载）。
- **不要使用**：不要自行 `new CampaignOptions()` 当作“另一份设置”来用——真正生效的是 `Campaign.Current.Options`，新建实例既不会被序列化，也不会被任何模型读取。不要在战役开始前（`Campaign.Current` 为 null）、主菜单或 Mission 战斗逻辑里访问：读 `CampaignOptions.X` 虽不会空引用（用了 `?.` 兜底），但拿到的是兜底默认值而非真实设置；不要在缺少 `[SaveableField]` 的新字段上存放需要随存档恢复的设置。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 以 `public readonly CampaignOptions Options` 字段持有本对象，构造时创建，存读档时一并序列化（`Campaign.cs` 第 97、565 行）。
- [GameAccelerationMode](../GameAccelerationMode) —— `AccelerationMode` 字段的枚举类型，决定战役时间是否快速推进。

下游与协同系统（读取/写入方）：

- [DefaultDifficultyModel](../DefaultDifficultyModel) —— 在 `GetPlayerTroopReceivedDamage` / `GetRecruitmentDifficulty` / `GetPlayerMapMovementSpeed` / `GetStealthAndDisguiseDifficulty` 等方法中 `switch` 读取 `PlayerTroopsReceivedDamage`、`RecruitmentDifficulty`、`PlayerMapMovementSpeed`、`StealthAndDisguiseDifficulty` 等档位，换算为具体数值。
- [DefaultPartyHealingModel](../DefaultPartyHealingModel) —— 在判断英雄能否阵亡时读取 `BattleDeath` 档位（`DefaultPartyHealingModel.cs:63`），`VeryEasy` 下英雄永不战死。
- [DefaultHeroDeathProbabilityCalculationModel](../DefaultHeroDeathProbabilityCalculationModel) —— 读取 `IsLifeDeathCycleDisabled` 以跳过英雄自然死亡概率计算（`DefaultHeroDeathProbabilityCalculationModel.cs:16`）。
- [DefaultCampaignTimeModel](../DefaultCampaignTimeModel) —— 读取 `Options.AccelerationMode` 判断是否处于快速推进模式，调整每日推进耗时（`DefaultCampaignTimeModel.cs:27`）。
- [DefaultPregnancyModel](../DefaultPregnancyModel) —— 在 `PregnancyDurationInDays` 中按 `Options.AccelerationMode` 把怀孕时长从 36 天缩短为 18 天（`DefaultPregnancyModel.cs:13`）。
- [DefaultCharacterDevelopmentModel](../DefaultCharacterDevelopmentModel) —— 读取 `Options.AccelerationMode` 加快角色养成进度（`DefaultCharacterDevelopmentModel.cs:104`）。

## 风险

- **战役未就绪时读到兜底默认值**：静态属性的 getter 走 `Campaign.Current?.Options` 并带 `?? 默认值`（Difficulty 字段兜底为 `Realistic`，bool 兜底为 `false`）。战役未启动、`Campaign.Current` 为 null 时不会抛异常，但你读到的是兜底值而非真实设置，容易误判逻辑；需要“当前战役真实设置”时务必确认 `Campaign.Current` 已就绪。
- **`AccelerationMode` 只能经实例访问**：它是 `public` 字段而非静态属性，没有 `CampaignOptions.AccelerationMode` 这种写法，必须通过 `Campaign.Current.Options.AccelerationMode` 读取；新加的偏好若误写成静态属性却没接 `Campaign.Current`，会读不到当前战役实例。
- **写入被静默丢弃**：静态 setter 内部是 `if (_current != null) _current.x = value;`——当 `Campaign.Current` 为 null（战役尚未创建）时赋值会被静默忽略，不报错也不生效。不要在战役加载完成前尝试写入设置。
- **新增偏好缺 `[SaveableField]` 会丢档**：本对象的每个需持久化字段都标注了 `[SaveableField(id)]`（如 `_isIronmanMode` 为 15、`AccelerationMode` 为 19、`_battleDeath` 为 17）。若你扩展类并新增普通字段存放偏好，存读档时该字段不会被序列化，重载战役后会回到默认值。
- **跨战役重载后缓存旧实例**：`Campaign.Current.Options` 在每次新战役/读档时由 `Campaign` 重新 `new` 一份（`Campaign.cs` 第 565 行）。把实例缓存进静态字段或长生命周期对象，会在重载后指向已销毁/旧的战役对象，读到陈旧设置。
- **误当 Model 替换实现**：CampaignOptions 是普通状态类，不是 `MBGameModel`；不要试图像规则模型那样注册替换实现来改变难度——难度的“解读”在 `DefaultDifficultyModel` 等模型里，选项本身只是被读取的数值。

## 成员说明

### 偏好开关（bool 静态属性）

- **`IsIronmanMode`**（bool 静态属性）
  - 用途：标记当前战役是否为铁人模式。为 `true` 时游戏禁用快速存档/读档与大多手动存档，并影响撤退菜单。
  - 副作用：写入会直接改 `Campaign.Current.Options._isIronmanMode`（在 `_current` 非空时）；存档面板与地图界面据其禁用存档选项。
  - 调用时机：`Campaign.cs` 自身、`MapScreen.cs:2517`、`SandBoxMissionViews.cs` 各 Mission 视图创建逃生菜单、故事模式 Mission 视图等都读取它来决定是否提供快速存档。

- **`IsLifeDeathCycleDisabled`**（bool 静态属性）
  - 用途：关闭英雄的自然生命/死亡循环（老龄死亡与出生）。为 `true` 时英雄不会因年龄自然死亡。UI 文案以反向的 `IsLifeDeathCycleEnabled` 呈现。
  - 副作用：写入改 `_isLifeDeathCycleDisabled`（SaveableField 12）。设置面板 `BirthAndDeathOptionsProvider` 通过它读写该开关。
  - 调用时机：`DefaultHeroDeathProbabilityCalculationModel.cs:16` 用它跳过死亡概率计算；`BirthAndDeathOptionsProvider.cs:10,12` 由设置界面读写。

- **`AutoAllocateClanMemberPerks`**（bool 静态属性）
  - 用途：是否自动分配家族成员的专长点。开启后系统自动为家族成员投资专长。
  - 副作用：写入改 `_autoAllocateClanMemberPerks`（SaveableField 4）。
  - 调用时机：家族/养成相关行为在成员升级时读取，以决定是否自动投资专长。

### 难度档位（Difficulty 枚举静态属性）

嵌套枚举 `Difficulty`（`: short`）取值为 `VeryEasy` / `Easy` / `Realistic`，是下列所有档位的类型。

- **`PlayerTroopsReceivedDamage`**（Difficulty）
  - 用途：玩家部队受到的伤害档位。`DefaultDifficultyModel.GetPlayerTroopReceivedDamage` 把 `VeryEasy→0.5`、`Easy→0.75`、`Realistic→1.0` 换算为伤害倍率。
  - 副作用：写入改 `_playerTroopsReceivedDamage`（SaveableField 5）。
  - 调用时机：战斗伤害结算时被 `DefaultDifficultyModel` 读取。

- **`RecruitmentDifficulty`**（Difficulty）
  - 用途：招募难度档位。`DefaultDifficultyModel.GetRecruitmentDifficulty` 映射为 `VeryEasy→2`、`Easy→1`、`Realistic→0` 的招募加成天数。
  - 副作用：写入改 `_recruitmentDifficulty`（SaveableField 8）。
  - 调用时机：招募行为/定居点计算招募速度时读取。

- **`PlayerMapMovementSpeed`**（Difficulty）
  - 用途：玩家在地图上的移动速度档位。`DefaultDifficultyModel.GetPlayerMapMovementSpeed` 映射为 `VeryEasy→0.1`、`Easy→0.05`、`Realistic→0` 的额外移速加成。
  - 副作用：写入改 `_playerMapMovementSpeed`（SaveableField 9）。
  - 调用时机：地图移动结算时读取。

- **`StealthAndDisguiseDifficulty`**（Difficulty）
  - 用途：潜行与伪装难度档位，影响潜入/伪装相关判定的成功率。
  - 副作用：写入改 `_stealthAndDisguiseDifficulty`（SaveableField 18）。
  - 调用时机：`DefaultDifficultyModel` 在潜行相关计算时读取。

- **`CombatAIDifficulty`**（Difficulty）
  - 用途：战斗 AI 难度档位，决定战斗中敌方 AI 的强弱。
  - 副作用：写入改 `_combatAIDifficulty`（SaveableField 11）。
  - 调用时机：战斗 AI 配置读取。

- **`PersuasionSuccessChance`**（Difficulty）
  - 用途：说服成功率档位，影响对话/任务中说服判定的基础概率。
  - 副作用：写入改 `_persuasionSuccessChance`（SaveableField 13）。
  - 调用时机：说服/外交相关计算读取。

- **`ClanMemberDeathChance`**（Difficulty）
  - 用途：家族成员死亡概率档位，影响非主角家族成员在事件中死亡的可能性。
  - 副作用：写入改 `_clanMemberDeathChance`（SaveableField 14）。
  - 调用时机：家族成员死亡事件判定读取。

- **`BattleDeath`**（Difficulty）
  - 用途：战斗死亡档位。`DefaultPartyHealingModel.cs:63` 用它决定英雄是否可在战斗中阵亡：`VeryEasy` 下英雄永不战死，`Easy` 下玩家角色不战死，`Realistic` 下正常。
  - 副作用：写入改 `_battleDeath`（SaveableField 17）。
  - 调用时机：`DefaultPartyHealingModel` 在判断英雄能否阵亡时读取。

### 游戏加速（实例字段）

- **`AccelerationMode`**（public `GameAccelerationMode` 字段，经实例访问）
  - 用途：游戏加速模式（`Default` / `Fast` 等），控制战役时间推进速度。`DefaultCampaignTimeModel` 据其调整每日耗时，`DefaultPregnancyModel` 据其把怀孕 36 天缩为 18 天，`DefaultCharacterDevelopmentModel` 据其加快养成。
  - 副作用：直接是 `Campaign.Current.Options` 上的 `public` 字段（SaveableField 19），写入即改当前战役实例。
  - 调用时机：时间模型、怀孕模型、养成模型在各自计算时读取 `Campaign.Current.Options.AccelerationMode`（`DefaultCampaignTimeModel.cs:27`、`DefaultPregnancyModel.cs:13`、`DefaultCharacterDevelopmentModel.cs:104`）。

### 嵌套枚举

- **`Difficulty`**（嵌套枚举，`: short`）
  - 用途：`VeryEasy` / `Easy` / `Realistic` 三档，作为上述所有难度档位的取值类型。
  - 副作用：无。
  - 调用时机：给档位赋值与比较时（如 `CampaignOptions.BattleDeath == CampaignOptions.Difficulty.VeryEasy`）。

## 示例

读取当前战役的真实设置——便捷档位走静态属性，加速模式走实例字段：

```csharp
// 静态属性直接读取当前战役设置（内部走 Campaign.Current.Options）
bool ironman = CampaignOptions.IsIronmanMode;
CampaignOptions.Difficulty battleDeath = CampaignOptions.BattleDeath;

// 加速模式是实例字段，必须经由 Campaign.Current.Options 访问
GameAccelerationMode mode = Campaign.Current.Options.AccelerationMode;
if (mode == GameAccelerationMode.Fast)
{
    // 处于快速推进模式：怀孕 18 天、养成更快
}
```

在战役已加载的前提下写入设置，并按档位做真实判定：

```csharp
// 仅在战役就绪时，用静态 setter 关闭生命/死亡循环
if (Campaign.Current != null)
{
    CampaignOptions.IsLifeDeathCycleDisabled = true;
}

// 按战斗死亡档位决定是否允许英雄战死（取自 DefaultPartyHealingModel 的真实判断）
bool heroCanDieInBattle = CampaignOptions.BattleDeath != CampaignOptions.Difficulty.VeryEasy;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameAccelerationMode](../GameAccelerationMode) · [DefaultDifficultyModel](../DefaultDifficultyModel) · [DefaultPartyHealingModel](../DefaultPartyHealingModel) · [DefaultHeroDeathProbabilityCalculationModel](../DefaultHeroDeathProbabilityCalculationModel) · [DefaultCampaignTimeModel](../DefaultCampaignTimeModel) · [DefaultPregnancyModel](../DefaultPregnancyModel) · [DefaultCharacterDevelopmentModel](../DefaultCharacterDevelopmentModel)
