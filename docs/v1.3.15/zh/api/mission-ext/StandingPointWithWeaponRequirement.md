<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StandingPointWithWeaponRequirement`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StandingPointWithWeaponRequirement

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithWeaponRequirement : StandingPoint`
**Base:** `StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## 概述

`StandingPointWithWeaponRequirement` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitRequiredWeaponClasses
`public void InitRequiredWeaponClasses(WeaponClass requiredWeaponClasses)`

**用途 / Purpose:** 初始化 `required weapon classes` 的状态、资源或绑定。

### InitRequiredWeapon
`public void InitRequiredWeapon(ItemObject weapon)`

**用途 / Purpose:** 初始化 `required weapon` 的状态、资源或绑定。

### InitGivenWeapon
`public void InitGivenWeapon(ItemObject weapon)`

**用途 / Purpose:** 初始化 `given weapon` 的状态、资源或绑定。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### SetHasAlternative
`public void SetHasAlternative(bool hasAlternative)`

**用途 / Purpose:** 设置 `has alternative` 的值或状态。

### HasAlternative
`public override bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `alternative`。

### SetUsingBattleSide
`public void SetUsingBattleSide(BattleSideEnum side)`

**用途 / Purpose:** 设置 `using battle side` 的值或状态。

## 使用示例

```csharp
var value = new StandingPointWithWeaponRequirement();
value.InitRequiredWeaponClasses(requiredWeaponClasses);
```

## 参见

- [完整类目录](../catalog)