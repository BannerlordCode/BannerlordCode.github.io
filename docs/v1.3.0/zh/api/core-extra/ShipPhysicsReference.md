<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipPhysicsReference`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ShipPhysicsReference

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipPhysicsReference : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipPhysicsReference.cs`

## 概述

`ShipPhysicsReference` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LinearDragTerm` | `public LinearFrictionTerm LinearDragTerm { get; }` |
| `AngularDragTerm` | `public Vec3 AngularDragTerm { get; }` |
| `LinearDampingTerm` | `public LinearFrictionTerm LinearDampingTerm { get; }` |
| `AngularDampingTerm` | `public Vec3 AngularDampingTerm { get; }` |
| `ConstantLinearDampingTerm` | `public LinearFrictionTerm ConstantLinearDampingTerm { get; }` |
| `ConstantAngularDampingTerm` | `public Vec3 ConstantAngularDampingTerm { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetDefaultWaterDensity
`public static float GetDefaultWaterDensity()`

**用途 / Purpose:** 获取 `default water density` 的当前值。

## 使用示例

```csharp
var value = new ShipPhysicsReference();
value.Deserialize(objectManager, node);
```

## 参见

- [完整类目录](../catalog)