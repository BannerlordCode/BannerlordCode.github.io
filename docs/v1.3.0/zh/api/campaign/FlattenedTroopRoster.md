<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FlattenedTroopRoster`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FlattenedTroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FlattenedTroopRoster : IEnumerable<FlattenedTroopRosterElement>, IEnumerable`
**Base:** `IEnumerable<FlattenedTroopRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRoster.cs`

## 概述

`FlattenedTroopRoster` 位于 `TaleWorlds.CampaignSystem.Roster`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Roster` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public FlattenedTroopRosterElement this { get; set; }` |
| `Troops` | `public IEnumerable<CharacterObject> Troops { get; }` |

## 主要方法

### Add
`public void Add(MBList<TroopRosterElement> roster)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public void Add(TroopRosterElement troop)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public void Add(CharacterObject troop, int number, int woundedNumber = 0)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public UniqueTroopDescriptor Add(CharacterObject troop, bool isWounded = false, int xp = 0)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### GenerateUniqueNoFromParty
`public static int GenerateUniqueNoFromParty(MobileParty party, int troopIndex)`

**用途 / Purpose:** 处理 `generate unique no from party` 相关逻辑。

### Remove
`public void Remove(UniqueTroopDescriptor descriptor)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### RemoveIf
`public ICollection<FlattenedTroopRosterElement> RemoveIf(Predicate<FlattenedTroopRosterElement> match)`

**用途 / Purpose:** 从当前集合/状态中移除 `if`。

### FindIndexOfCharacter
`public UniqueTroopDescriptor FindIndexOfCharacter(CharacterObject character)`

**用途 / Purpose:** 处理 `find index of character` 相关逻辑。

### GetEnumerator
`public IEnumerator<FlattenedTroopRosterElement> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 当 `troop killed` 事件触发时调用此方法。

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 当 `troop wounded` 事件触发时调用此方法。

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 当 `troop routed` 事件触发时调用此方法。

### OnTroopGainXp
`public void OnTroopGainXp(UniqueTroopDescriptor troopSeed, int xpGained)`

**用途 / Purpose:** 当 `troop gain xp` 事件触发时调用此方法。

## 使用示例

```csharp
FlattenedTroopRoster example = FlattenedTroopRoster.this;
```

## 参见

- [完整类目录](../catalog)