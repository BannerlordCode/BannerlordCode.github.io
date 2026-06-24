<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleTroopSupplier`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleTroopSupplier

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleTroopSupplier : IMissionTroopSupplier`
**Base:** `IMissionTroopSupplier`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs`

## 概述

`CustomBattleTroopSupplier` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SupplyTroops
`public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)`

**用途 / Purpose:** 处理 `supply troops` 相关逻辑。

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**用途 / Purpose:** 处理 `supply one troop` 相关逻辑。

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 获取 `all troops` 的当前值。

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 获取 `general character` 的当前值。

### OnTroopWounded
`public void OnTroopWounded()`

**用途 / Purpose:** 当 `troop wounded` 事件触发时调用此方法。

### OnTroopKilled
`public void OnTroopKilled()`

**用途 / Purpose:** 当 `troop killed` 事件触发时调用此方法。

### OnTroopRouted
`public void OnTroopRouted()`

**用途 / Purpose:** 当 `troop routed` 事件触发时调用此方法。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

## 使用示例

```csharp
var value = new CustomBattleTroopSupplier();
value.SupplyTroops(0);
```

## 参见

- [完整类目录](../catalog)