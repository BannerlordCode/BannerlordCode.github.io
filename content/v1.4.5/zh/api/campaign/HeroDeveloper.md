---
title: "HeroDeveloper"
description: "HeroDeveloper 的自动生成类参考。"
---
# HeroDeveloper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroDeveloper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/HeroDeveloper.cs`

## 概述

`HeroDeveloper` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UnspentFocusPoints` | `public int UnspentFocusPoints { get; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `TotalXp` | `public int TotalXp { get; }` |

## 主要方法

### GetSkillXpProgress
`public int GetSkillXpProgress(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp progress」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetSkillXpProgress(skill);
```

### GetSkillXp
`public float GetSkillXp(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetSkillXp(skill);
```

### ClearUnspentPoints
`public void ClearUnspentPoints()`

**用途 / Purpose:** 清空当前对象中的「unspent points」。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ClearUnspentPoints();
```

### ResetCharacterStats
`public void ResetCharacterStats()`

**用途 / Purpose:** 将 「character stats」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ResetCharacterStats();
```

### ClearHero
`public void ClearHero()`

**用途 / Purpose:** 清空当前对象中的「hero」。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ClearHero();
```

### InitializeHeroDeveloper
`public void InitializeHeroDeveloper()`

**用途 / Purpose:** 为 「hero developer」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.InitializeHeroDeveloper();
```

### DevelopCharacterStats
`public void DevelopCharacterStats()`

**用途 / Purpose:** 处理与 「develop character stats」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.DevelopCharacterStats();
```

### GetTotalSkillPoints
`public int GetTotalSkillPoints()`

**用途 / Purpose:** 读取并返回当前对象中 「total skill points」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetTotalSkillPoints();
```

### ChangeSkillLevel
`public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)`

**用途 / Purpose:** 处理与 「change skill level」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ChangeSkillLevel(skill, 0, false);
```

### SetInitialSkillLevel
`public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)`

**用途 / Purpose:** 为 「initial skill level」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.SetInitialSkillLevel(skill, 0);
```

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)`

**用途 / Purpose:** 将 「skill xp」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddSkillXp(skill, 0, false, false);
```

### GetFocusFactor
`public float GetFocusFactor(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「focus factor」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetFocusFactor(skill);
```

### CheckLevel
`public void CheckLevel(bool shouldNotify)`

**用途 / Purpose:** 检查「level」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.CheckLevel(false);
```

### ResetTotalXpForPlayerCharacter
`public void ResetTotalXpForPlayerCharacter()`

**用途 / Purpose:** 将 「total xp for player character」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.ResetTotalXpForPlayerCharacter();
```

### SetInitialLevel
`public void SetInitialLevel(int level)`

**用途 / Purpose:** 为 「initial level」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.SetInitialLevel(0);
```

### AddPerk
`public void AddPerk(PerkObject perk)`

**用途 / Purpose:** 将 「perk」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddPerk(perk);
```

### GetXpRequiredForLevel
`public int GetXpRequiredForLevel(int level)`

**用途 / Purpose:** 读取并返回当前对象中 「xp required for level」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetXpRequiredForLevel(0);
```

### RemoveAttribute
`public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)`

**用途 / Purpose:** 从当前容器或状态中移除 「attribute」。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.RemoveAttribute(attrib, 0);
```

### AddAttribute
`public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)`

**用途 / Purpose:** 将 「attribute」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddAttribute(attrib, 0, false);
```

### AddFocus
`public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)`

**用途 / Purpose:** 将 「focus」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AddFocus(skill, 0, false);
```

### RemoveFocus
`public void RemoveFocus(SkillObject skill, int changeAmount)`

**用途 / Purpose:** 从当前容器或状态中移除 「focus」。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.RemoveFocus(skill, 0);
```

### CanAddFocusToSkill
`public bool CanAddFocusToSkill(SkillObject skill)`

**用途 / Purpose:** 检查当前对象是否满足 「add focus to skill」 的前置条件。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.CanAddFocusToSkill(skill);
```

### GetRequiredFocusPointsToAddFocus
`public int GetRequiredFocusPointsToAddFocus(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「required focus points to add focus」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetRequiredFocusPointsToAddFocus(skill);
```

### GetFocus
`public int GetFocus(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「focus」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetFocus(skill);
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**用途 / Purpose:** 读取并返回当前对象中 「perk value」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
var result = heroDeveloper.GetPerkValue(perk);
```

### InitializeSkillXp
`public void InitializeSkillXp(SkillObject skill)`

**用途 / Purpose:** 为 「skill xp」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.InitializeSkillXp(skill);
```

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 在 「load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeroDeveloper 实例
HeroDeveloper heroDeveloper = ...;
heroDeveloper.AfterLoad();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeroDeveloper heroDeveloper = ...;
heroDeveloper.GetSkillXpProgress(skill);
```

## 参见

- [本区域目录](../)