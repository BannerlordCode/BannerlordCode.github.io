---
title: "DefineSynchedMissionObjectType"
description: "同步任务物体与实体类型的绑定特性：14 行、一个 readonly Type 字段，AttributeUsage 允许 class 与 struct —— 它与 DefineGameNetworkMessageType 是刻意不同适用范围的一对姊妹。"
---

# DefineSynchedMissionObjectType

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal sealed class DefineSynchedMissionObjectType : Attribute`
**Base:** `System.Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefineSynchedMissionObjectType.cs`

## 概述

`DefineSynchedMissionObjectType` 是 14 行的自定义特性，只有一个 `public readonly Type Type` 字段（`:8`）与一个构造器（`:10-13`）。它标注「这个类型对应哪个实体类型」，取值是 `System.Type`。

它有 9 个真实使用点（声明文件自己不算）。**其中 `BaseSynchedMissionObjectReadableRecord.cs:7` 是唯一一个标在结构体上的** —— 它声明为 `public struct BaseSynchedMissionObjectReadableRecord`，这正是 `AttributeUsage` 包含 `Struct` 的原因。其余 8 个都标在类上，**且实参全是「自己」**：`BatteringRam.cs:16` 的 `[DefineSynchedMissionObjectType(typeof(BatteringRam))]`、`DestructableComponent.cs:16` 的 `typeof(DestructableComponent)`、`RangedSiegeWeapon.cs:16` 的 `typeof(RangedSiegeWeapon)`、`SiegeLadder.cs`、`SiegeTower.cs`、`StonePile.cs`、`UsableMissionObject.cs`、`VertexAnimator.cs` 同理。

## 心智模型

把它当成**「类型 ↔ 实体类型的登记表」**。三条推论：

第一,**它与 [DefineGameNetworkMessageType](../DefineGameNetworkMessageType/) 是刻意配对的姊妹，两者适用范围不同。** 本类 `:5` 是 `AttributeTargets.Class | AttributeTargets.Struct` —— **允结构体**；姊妹类的 `:5` 只有 `Class`。**换句话说：网络消息必须是类，同步对象可以是结构体。**

第二,**实参几乎总是「自己」，而唯一的例外揭示了 `Struct` 的来源。** 8 个类上的使用点全是 `[DefineSynchedMissionObjectType(typeof(X))]` 且 `X` 就是被标注的类 —— 看似冗余，但它让扫描器只按特性取值、无需解析标注位置。**而 `BaseSynchedMissionObjectReadableRecord.cs:7` 传的是 `typeof(SynchedMissionObject)` 而不是 `typeof(BaseSynchedMissionObjectReadableRecord)`，且它是 `public struct`** —— 这是全树唯一一个实参不等于自身的使用点，也是 `:5` 里 `AttributeTargets.Struct` 存在的实证。

第三,**字段是 `Type` 而不是枚举。** `:8` 的 `public readonly Type Type;` —— 所以每个使用点都带一个类型引用，**这与 `DefineGameNetworkMessageType` 带枚举值是本质差别**（后者只需一个 `int` 大小的值，前者需要运行时类型解析）。

第四,**「实参 ≠ 自身」那一条有它的实际用途。** `GameNetwork.cs:1180` 取到的 `type2` 之后被用于 `:1182-1189` 的**沿继承链匹配**：拿待查类型 `type3 = type` 一路 `type3 = type3.BaseType` 往上走，看是否等于 `type2`。所以实参写基类（`SynchedMissionObject`）意味着**该基类的所有派生类型都能匹配上**，而不只是 `BaseSynchedMissionObjectReadableRecord` 自己。

边界：**`internal sealed class`**，编译期不可引用。与姊妹类相同：`sealed` 不可继承。

## 如何使用

**怎么拿到它**：靠反射。因为它是 `internal`，拿不到 `typeof(DefineSynchedMissionObjectType)`，只能按字符串名取：

```csharp
using System;
using System.Reflection;
using TaleWorlds.MountAndBlade;

// 反射读取某个类标注的实体类型
Type t = typeof(BatteringRam);
var attr = (Attribute)Attribute.GetCustomAttribute(t, "DefineSynchedMissionObjectType", false);
if (attr == null)
{
    Debug.Print("该类没有标注 DefineSynchedMissionObjectType", 0);
    return;
}
FieldInfo field = attr.GetType().GetField("Type", BindingFlags.Public | BindingFlags.Instance);
object entityType = field?.GetValue(attr);
Debug.Print("BatteringRam 对应的实体类型 = " + entityType, 0);
```

**用它最容易踩的一条**：**它能被标在结构体上，而它的姊妹类不能。** `:5` 明确包含 `AttributeTargets.Struct`，且 `BaseSynchedMissionObjectReadableRecord` 确实是个 `public struct` 并带这个标注。**所以你会看到特性出现在结构体上 —— 若照着姊妹类的写法假设「必须 class」，会给结构体漏标，而漏标的后果由同步层决定（本类不做校验）。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Type` | `public readonly Type Type` | **本类的全部数据（`:8`）。** 声明被标注类所对应的实体类型。**`readonly` 且无 setter**，只能由 `:12` 的构造器赋值。**注意字段名与类型名都是 `Type`** —— 读代码时 `Type = type` 看起来像自我赋值，实际是「字段 `Type` ← 形参 `type`」。 |
| `DefineSynchedMissionObjectType(Type)` | `public DefineSynchedMissionObjectType(Type type)` | 唯一构造器（`:10-13`）。`:12` 把形参赋给 `Type` 字段。**没有无参构造**（带参构造抑制了默认构造）。 |

## 真实示例

八个「实参 = 自身」的使用点（第一个是唯一的例外）：

```csharp
// BaseSynchedMissionObjectReadableRecord.cs:7  [DefineSynchedMissionObjectType(typeof(SynchedMissionObject))]
//   ^ 唯一例外：被标注者是 public struct，实参却是它的基类 SynchedMissionObject
//     这也是 DefineSynchedMissionObjectType.cs:5 里 AttributeTargets.Struct 存在的实证
// BatteringRam.cs:16             [DefineSynchedMissionObjectType(typeof(BatteringRam))]          public class
// DestructableComponent.cs:16    [DefineSynchedMissionObjectType(typeof(DestructableComponent))] public class
// RangedSiegeWeapon.cs:16        [DefineSynchedMissionObjectType(typeof(RangedSiegeWeapon))]     public abstract class
// SiegeLadder.cs / SiegeTower.cs / StonePile.cs / UsableMissionObject.cs / VertexAnimator.cs 同理
// => 8 个类：实参全是 typeof(自身)；1 个结构体：实参是基类
Debug.Print("8 个类 typeof(自身) + 1 个 struct typeof(基类)", 0);
```

两个姊妹特性的适用范围对照（决定你能不能标在 struct 上）：

```csharp
// DefineSynchedMissionObjectType.cs:5   [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct)]
// DefineGameNetworkMessageType.cs:5      [AttributeUsage(AttributeTargets.Class)]
//                                        ^ 只允许 Class
Debug.Print("同步对象可标 struct，网络消息不可 —— 一对姊妹，两种适用范围", 0);
```

消费方（继承链匹配的完整逻辑，这是本类的实际用途）：

```csharp
// bannerlord-1.4.5/.../GameNetwork.cs:1177-1191
//   Type element = _synchedMissionObjectClassTypes[i];
//   var attr  = element.GetCustomAttribute<DefineSynchedMissionObjectType>();      // :1178
//   var attr2 = element.GetCustomAttribute<DefineSynchedMissionObjectTypeForMod>(); // :1179
//   Type type2 = attr?.Type ?? attr2?.Type;                                        // :1180  本类优先，回落 ForMod 变体
//   Type type3 = type;
//   while (type3 != null) { if (type3 == type2) return i; type3 = type3.BaseType; }  // :1182-1189
//   return -1;                                                                     // :1191
// 另一处：GameNetwork.cs:1514 只判 attr != null，:1519 把类型收进 synchedMissionObjectClassTypes
Debug.Print("Type 用来沿继承链匹配，不是简单字典查找", 0);
```

## 风险与边界

- **`internal sealed class`，编译期不可引用、不可派生。** `:6`。
- **`AttributeUsage` 允许 `Class` 与 `Struct`，不含 `Interface`。** `:5`。**标在接口上会编译失败。** 而 `Struct` 不是摆设 —— `BaseSynchedMissionObjectReadableRecord` 是 `public struct` 且带此标注。
- **字段名与类型名同名。** `:8` 的 `public readonly Type Type;` + `:12` 的 `Type = type;`。**读起来像自我赋值，其实是「字段 Type ← 形参 type」。** 不影响语义，但会让人第一眼怀疑。
- **没有显式无参构造。** `:10`。
- **不能重复标注。** `:5` 未指定 `AllowMultiple`，**默认 `false`**。
- **`Inherited` 默认 `true`。** 派生类会继承这个特性。
- **`Type` 字段的读取方是 `GameNetwork.cs:1180`，两处。** `:1178` 用 `element.GetCustomAttribute<DefineSynchedMissionObjectType>()` 取标注，`:1180` 是 `Type type2 = customAttribute?.Type ?? customAttribute2?.Type;` —— **它优先用本类的 `Type`，本类缺失时回落 `DefineSynchedMissionObjectTypeForMod` 的 `Type`**（这是一个并列的 mod 专用变体）。`:1182-1189` 的 while 循环沿 `type.BaseType` 往上比，**命中就返回下标，否则 `:1191` 返回 -1**。另一处 `:1514` 只判 `GetCustomAttribute<DefineSynchedMissionObjectType>() != null`（不看 `Type` 值），命中则 `:1519` 把类型收进 `synchedMissionObjectClassTypes`。
- **字段是运行时 `Type` 引用而非枚举/int。** `:8`。这意味着**每个使用点都在元数据里留一个类型引用**，扫描成本比枚举值高 —— 我陈述这个差异，不断言它是否造成可测量的性能问题。

## 参见

- 姊妹特性：[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)（`:5` 只允许 `Class`，字段是枚举而非 `Type`）
- 载荷：[SynchedMissionObject](../../mission-ext/SynchedMissionObject/)（结构体那个使用点的实参）、`BatteringRam` / `DestructableComponent` / `RangedSiegeWeapon` / `SiegeLadder` / `SiegeTower` / `StonePile` / `UsableMissionObject` / `VertexAnimator` / `BaseSynchedMissionObjectReadableRecord`（`System.Type`、`System.Attribute`）
- 使用点：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs:7`、`BatteringRam.cs:16`、`DestructableComponent.cs:16`、`RangedSiegeWeapon.cs:16`、`SiegeLadder.cs`、`SiegeTower.cs`、`StonePile.cs`、`UsableMissionObject.cs`、`VertexAnimator.cs`；消费方 `GameNetwork.cs:1178`、`:1180`、`:1514`
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)
- 桶首页：[mission API 分区](../)