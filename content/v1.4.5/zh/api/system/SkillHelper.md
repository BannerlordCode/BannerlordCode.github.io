---
title: "SkillHelper"
description: "把 SkillEffect 值应用到角色、party 和 town 的 ExplainedNumber 战役计算中。"
---
# SkillHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class SkillHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## 一句话职责

`SkillHelper` 解析技能持有者，计算 [SkillEffect](../../campaign/SkillEffect)，再把结果加入调用方提供的 [ExplainedNumber](../../campaign/ExplainedNumber)。

## 心智模型

这是计算桥接层，不是技能成长或存档服务。调用方拥有基础统计值，并通过 `ref` 传入；`SkillHelper` 读取技能等级，向 `SkillEffect` 请求该等级的效果值，再应用加法值或加成因子。helper 不会改变角色技能、party roster 或 town 本身。

这些按 role 解析的重载有意不同：

- party 计算解析 `PartyRole` 持有者；找不到时会回退到有效 party leader。
- town 计算只识别 `ClanLeader` 和 `Governor` role。
- character 计算直接使用调用方传入的 `CharacterObject`。
- skill-level 计算使用显式整数，不解析任何持有者。

## 什么时候使用，什么时候不要使用

- **适合：** model 或计算管线已经持有 `ExplainedNumber`，需要加入一个技能效果贡献时使用。
- **适合：** 调用方需要 explanation line 中的 role 标签，并已启用 `IncludeDescriptions` 时使用。
- **不要：** 用它提升技能；它只读取技能值并改变临时解释统计。
- **不要：** 用它替代所属 model 的 role 或资格检查；town 重载收到不支持的 role 时不会贡献数值。
- **不要传入 null character：** `AddSkillBonusForCharacter` 会直接读取该 character 的技能值。

## 公开入口

### `AddSkillBonusForSkillLevel`

```csharp
public static void AddSkillBonusForSkillLevel(
    SkillEffect skillEffect,
    ref ExplainedNumber explainedNumber,
    int skillLevel)
```

调用 `skillEffect.GetSkillEffectValue(skillLevel)`，再根据 effect 的 `IncrementType` 把结果加入统计值。

### `AddSkillBonusForParty`

```csharp
public static void AddSkillBonusForParty(
    SkillEffect skillEffect,
    MobileParty party,
    ref ExplainedNumber explainedNumber)
```

对于 party role，helper 在 `PartyLeader` role 下优先使用 party leader。否则先请求 party 的有效 role holder；若没有，再回退到 `GetEffectivePartyLeaderForSkill(party.Party)`。如果无法解析角色，统计值保持不变。

### `AddSkillBonusForTown`

```csharp
public static void AddSkillBonusForTown(
    SkillEffect skillEffect,
    Town town,
    ref ExplainedNumber explainedNumber)
```

`ClanLeader` 通过 town 所属 settlement 的 owner clan 解析；`Governor` 通过 `town.Governor` 解析。其他 role 即使 town 中存在相关人物，也不会改变统计值。

### `AddSkillBonusForCharacter`

```csharp
public static void AddSkillBonusForCharacter(
    SkillEffect skillEffect,
    CharacterObject character,
    ref ExplainedNumber explainedNumber)
```

读取 `character.GetSkillValue(skillEffect.EffectedSkill)`，计算 effect，并应用到传入的统计值。

### `GetEffectDescriptionForSkillLevel`

```csharp
public static TextObject GetEffectDescriptionForSkillLevel(
    SkillEffect effect,
    int level)
```

计算 effect 在 `level` 下的值；若为 `AddFactor`，为显示将数值乘以 `100`；再把绝对值格式化为一位小数，写入 effect description 的 `a0` 变量，并返回同一个 `TextObject`。

### `GetEffectivePartyLeaderForSkill`

```csharp
public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)
```

有 leader 时返回其 `CharacterObject`。没有 leader 时，如果 roster 有成员则返回索引 `0` 的角色；null party、缺失 roster 和空 roster 都返回 `null`。

## 真实 Campaign 计算流程

原版 model 会传入真实 Campaign effect 和可变的解释统计。下面是 `DefaultPartySizeLimitModel` 形状的 party-size 示例：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

ExplainedNumber partySize = new ExplainedNumber(20f, includeDescriptions: true);
SkillHelper.AddSkillBonusForParty(
    DefaultSkillEffects.StewardPartySizeBonus,
    MobileParty.MainParty,
    ref partySize);

int calculatedPartySize = (int)partySize.ResultNumber;
```

town 和 character 计算遵循相同边界：

```csharp
ExplainedNumber relationIncrease = new ExplainedNumber(20f);
SkillHelper.AddSkillBonusForCharacter(
    DefaultSkillEffects.CharmRelationBonus,
    Hero.MainHero.CharacterObject,
    ref relationIncrease);
```

这些调用只向调用方拥有的计算累加贡献，不会自动把结果写回 model，也不会自动存档。

## 依赖与所有权

- [SkillEffect](../../campaign/SkillEffect) 提供受影响技能、role、增量类型、描述和按等级计算的方法。
- [ExplainedNumber](../../campaign/ExplainedNumber) 持有基础值、因子/加法行和最终结果；`SkillHelper` 通过引用修改它。
- [MobileParty](../../campaign/MobileParty)、[Town](../../campaign/Town)、[CharacterObject](../../campaign/CharacterObject) 和 [PartyBase](../../campaign/PartyBase) 提供 role 或角色上下文。
- `DefaultSkillEffects` 提供原版 effect；调用方 model 负责基础值，并决定是否包含描述。
- 只有 `ExplainedNumber.IncludeDescriptions` 为真时才会调用 `GameTexts.FindText("role", ...)`，因此 explanation 标签只是可选展示元数据。

## 风险与存档边界

- `EffectIncrementType.Add` 会调用 `ExplainedNumber.Add`，`AddFactor` 会调用 `ExplainedNumber.AddFactor`；二者是不同的算术契约，不能只当成显示格式差异。
- 因子的可读描述会乘以 `100`，但传给 `AddFactor` 的实际因子值保持不变。
- party role holder 或 town governor/clan leader 缺失时不会报错，只是不产生贡献；需要结果时应由调用方验证持有者。
- `GetEffectivePartyLeaderForSkill` 在没有 leader 但 roster 非空时使用第一个角色，因此 fallback 结果依赖 roster 顺序。
- `GetEffectDescriptionForSkillLevel` 会修改 effect description 的 `a0` 文本变量，不会复制 `TextObject`。
- helper 没有字段或存档契约。生成的 `ExplainedNumber` 是临时计算状态，不是持久 Campaign 状态。

## 版本注记

本页按 v1.4.5 `SkillHelper.cs` 编写。六个公开入口都是计算或展示辅助方法；技能成长、effect 定义、role 分配和持久化属于各自所有系统。

## 导航

- [↑ API 系统索引](../)
- [相关：SkillEffect](../../campaign/SkillEffect)
- [相关：ExplainedNumber](../../campaign/ExplainedNumber)
- [相关：MobileParty](../../campaign/MobileParty)
- [相关：Town](../../campaign/Town)
- [相关：CharacterObject](../../campaign/CharacterObject)
