<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterRelationManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterRelationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## 概述

`CharacterRelationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CharacterRelationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static CharacterRelationManager Instance { get; }` |

## 主要方法

### GetHeroRelation
`public static int GetHeroRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 获取 `hero relation` 的当前值。

### SetHeroRelation
`public static void SetHeroRelation(Hero hero1, Hero hero2, int value)`

**用途 / Purpose:** 设置 `hero relation` 的值或状态。

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 处理 `after load` 相关逻辑。

### RemoveHero
`public void RemoveHero(Hero deadHero)`

**用途 / Purpose:** 从当前集合/状态中移除 `hero`。

### GetRelation
`public int GetRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 获取 `relation` 的当前值。

### SetRelation
`public void SetRelation(Hero hero1, Hero hero2, int value)`

**用途 / Purpose:** 设置 `relation` 的值或状态。

### Remove
`public void Remove(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### ClearOldData
`public void ClearOldData()`

**用途 / Purpose:** 处理 `clear old data` 相关逻辑。

## 使用示例

```csharp
var manager = CharacterRelationManager.Current;
```

## 参见

- [完整类目录](../catalog)