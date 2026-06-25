---
title: "NarrativeMenuOptionArgs"
description: "NarrativeMenuOptionArgs 的自动生成类参考。"
---
# NarrativeMenuOptionArgs

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuOptionArgs`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs`

## 概述

`NarrativeMenuOptionArgs` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AffectedSkills` | `public MBList<SkillObject> AffectedSkills { get; }` |
| `SkillLevelToAdd` | `public int SkillLevelToAdd { get; }` |
| `AffectedTraits` | `public MBList<TraitObject> AffectedTraits { get; }` |
| `TraitLevelToAdd` | `public int TraitLevelToAdd { get; }` |
| `FocusToAdd` | `public int FocusToAdd { get; }` |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd { get; }` |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute { get; }` |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd { get; }` |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd { get; }` |
| `RenownToAdd` | `public int RenownToAdd { get; }` |
| `GoldToAdd` | `public int GoldToAdd { get; }` |
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |

## 主要方法

### SetAffectedSkills
`public void SetAffectedSkills(SkillObject affectedSkills)`

**用途 / Purpose:** 为 「affected skills」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetAffectedSkills(affectedSkills);
```

### SetFocusToSkills
`public void SetFocusToSkills(int focusToAdd)`

**用途 / Purpose:** 为 「focus to skills」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetFocusToSkills(0);
```

### SetLevelToSkills
`public void SetLevelToSkills(int levelToAdd)`

**用途 / Purpose:** 为 「level to skills」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetLevelToSkills(0);
```

### SetAffectedTraits
`public void SetAffectedTraits(TraitObject affectedTraits)`

**用途 / Purpose:** 为 「affected traits」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetAffectedTraits(affectedTraits);
```

### SetLevelToTraits
`public void SetLevelToTraits(int levelToAdd)`

**用途 / Purpose:** 为 「level to traits」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetLevelToTraits(0);
```

### SetLevelToAttribute
`public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)`

**用途 / Purpose:** 为 「level to attribute」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetLevelToAttribute(characterAttribute, 0);
```

### SetRenownToAdd
`public void SetRenownToAdd(int value)`

**用途 / Purpose:** 为 「renown to add」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetRenownToAdd(0);
```

### SetUnspentFocusToAdd
`public void SetUnspentFocusToAdd(int value)`

**用途 / Purpose:** 为 「unspent focus to add」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetUnspentFocusToAdd(0);
```

### SetUnspentAttributeToAdd
`public void SetUnspentAttributeToAdd(int value)`

**用途 / Purpose:** 为 「unspent attribute to add」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOptionArgs 实例
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetUnspentAttributeToAdd(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetAffectedSkills(affectedSkills);
```

## 参见

- [本区域目录](../)