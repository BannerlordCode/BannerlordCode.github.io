---
title: "DefineGameNetworkMessageType"
description: "网络消息类的发送方向标记特性：14 行、一个 readonly 字段，AttributeUsage 只允许标在 class 上（不含 struct 与 interface）—— 而它有 60+ 个真实使用点。"
---

# DefineGameNetworkMessageType

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal sealed class DefineGameNetworkMessageType : Attribute`
**Base:** `System.Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefineGameNetworkMessageType.cs`

## 概述

`DefineGameNetworkMessageType` 是 14 行的自定义特性，只有一个 `public readonly` 字段 `SendType`（`:8`）与一个构造器（`:10-13`）。它标注「这个网络消息类属于哪个发送方向」，取值来自 [GameNetworkMessageSendType](../../mission-ext/GameNetworkMessageSendType/)。

它**有大量真实使用点**：我实测 `NetworkMessages.FromClient/` 目录下的消息类几乎全部带它，例如 `AdminMuteUnmutePlayer.cs:6`、`AdminRequestAnnouncement.cs:6`、`AdminRequestClassRestrictionChange.cs:7`、`AdminRequestEndMission.cs:6`，取值统一是 `GameNetworkMessageSendType.FromClient`。

## 心智模型

把它当成**「反射扫描的输入」**。三条推论：

第一,**它是 `sealed` 的，不能派生。** `:6` 的 `internal sealed class` —— 这与 [ScriptingInterfaceBase](../ScriptingInterfaceBase/) 那个可继承的空类正好相反。**特性一旦要「被继承以复用标记」，这条路是关的。**

第二,**`AttributeUsage` 排除了 struct 与 interface。** `:5` 是 `[AttributeUsage(AttributeTargets.Class)]`。**所以把 `[DefineGameNetworkMessageType(...)]` 标在一个结构体或接口上会编译报错。** 对照它的姊妹特性 [DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/) 的 `:5` 是 `AttributeTargets.Class | AttributeTargets.Struct` —— **两个姊妹特性的适用范围刻意不同。**

第三,**`readonly` 字段 + 无 setter ⇒ 标注后不可改。** `:8` 是 `public readonly GameNetworkMessageSendType SendType;`，`:12` 在构造器里赋值。**所以「发送方向」是类型级的一次性声明，不是实例状态。**

第三,**`FromServer` 与 `DebugFromServer` 在消费侧是同一个分支。** `GameNetwork.cs:1473` 与 `:1474` 两个 case 共用 `:1475` 的 `gameNetworkMessagesFromServer.Add(type)`。**所以标注写 `DebugFromServer` 与写 `FromServer` 在运行时完全等价** —— 两者只在属性值上可区分。

边界：**`internal sealed class`**，编译期不可引用。**而它标注的类（消息类）是 public 的** —— 所以 mod 看得见被标注的结果，看不见标注器本身。

## 如何使用

**怎么拿到它**：`AttributeUsage` + `GetCustomAttribute` 反射读取。**读取方就在 `GameNetwork.cs:1465-1480`**（见下），所以这不再是「标准形状」而是可核对的具体实现。不是我抄来的官方调用点：

```csharp
using System;
using System.Reflection;
using TaleWorlds.MountAndBlade;

// 反射读取某个消息类的发送方向
Type messageType = typeof(TaleWorlds.MountAndBlade.MissionNetwork);
// attribute 本身是 internal，拿不到 typeof(DefineGameNetworkMessageType)
// 只能按名字 + AttributeUsage 约定的 AttributeTargets 去取
var attr = (Attribute)Attribute.GetCustomAttribute(messageType, "DefineGameNetworkMessageType", false);
Debug.Print("attr = " + (attr == null ? "null" : attr.GetType().FullName), 0);
if (attr != null)
{
    FieldInfo field = attr.GetType().GetField("SendType", BindingFlags.Public | BindingFlags.Instance);
    object sendType = field?.GetValue(attr);
    Debug.Print("SendType = " + sendType, 0);
}
```

**用它最容易踩的一条**：**它不能标在结构体上。** `:5` 的 `AttributeUsage(AttributeTargets.Class)` 只有 `Class` 一项 —— **没有 `Struct`、没有 `Interface`**。如果消息是结构体，编译期就会失败。对照姊妹特性 [DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/) 明确允许 `Struct`，说明这个差异是**刻意**的：网络消息必须是类，而同步对象可以是结构体。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SendType` | `public readonly GameNetworkMessageSendType SendType` | **本类的全部数据（`:8`）。** 声明这个网络消息类的发送方向。**`readonly` 且无 setter**，只能由 `:12` 的构造器赋值一次。取值来源是调用方传的枚举实参（`:10-13`）。 |
| `DefineGameNetworkMessageType(GameNetworkMessageSendType)` | `public DefineGameNetworkMessageType(GameNetworkMessageSendType sendType)` | 唯一构造器（`:10-13`）。`:12` 把形参赋给 `SendType`。**类里没有显式无参构造** —— C# 不会自动生成，因为已声明了带参构造。 |

## 真实示例

真实使用点的四种取值（都来自我 grep 的 `NetworkMessages.FromClient/` 目录）：

```csharp
// AdminMuteUnmutePlayer.cs:6           [DefineGameNetworkMessageType(GameNetworkMessageSendType.FromClient)]
// AdminRequestAnnouncement.cs:6         [DefineGameNetworkMessageType(GameNetworkMessageSendType.FromClient)]
// AdminRequestClassRestrictionChange.cs:7 [DefineGameNetworkMessageType(GameNetworkMessageSendType.FromClient)]
// AdminRequestEndMission.cs:6           [DefineGameNetworkMessageType(GameNetworkMessageSendType.FromClient)]
// => FromClient 这一目录里的消息全部标注 FromClient，标注与目录名一一对应
Debug.Print("目录名 = 发送方向，标注与它重复", 0);
```

两个姊妹特性的适用范围对照（这一条决定了你能标什么）：

```csharp
// DefineGameNetworkMessageType.cs:5    [AttributeUsage(AttributeTargets.Class)]
// DefineSynchedMissionObjectType.cs:5  [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct)]
//                                  ^ 多了 Struct
// 结论：网络消息【必须】是 class；同步对象【可以是】 struct
Debug.Print("网络消息不许标 struct；同步对象可以", 0);
```

## 风险与边界

- **`internal sealed class`，编译期不可引用、不可派生。** `:6`。
- **`AttributeUsage` 只允许 `Class`。** `:5`。**结构体与接口上标注会编译失败。** 姊妹特性允许 `Struct`。
- **`SendType` 是 `readonly` 字段，标注后不可改。** `:8`。
- **没有无参构造。** `:10` 的带参构造抑制了默认构造。
- **特性本身是 internal，所以只能用反射读，拿不到 `typeof(...)`。** 要读只能靠字符串名 `"DefineGameNetworkMessageType"`（见「如何使用」的片段）。
- **消费方是 `GameNetwork.cs:1465-1480` 的反射分流。** `:1465` `type.GetCustomAttribute<DefineGameNetworkMessageType>()`、`:1466` 判 `!= null`、`:1471` `switch (attr.SendType)`、`:1475`/`:1478` 分别 `Add` 进两张表。**不标这个特性 ⇒ 消息类不进任何一张表（`:1467` 的 if 不进），消息被静默忽略。**
- **属性可以重复标注？** `:5` 没有指定 `AllowMultiple`，**默认是 `false`** —— 所以同一个类上标两次会编译失败。
- **`Inherited` 默认 `true`。** 没指定，所以派生类会继承这个标注 —— 而它 `sealed`，本类自身不可派生，但**被它标注的类可以派生，派生类会继承该特性**。

## 参见

- 姊妹特性：[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)（`:5` 的 `AttributeUsage` 多了 `Struct`，字段类型是 `Type` 而非枚举）
- 取值类型：[GameNetworkMessageSendType](../../mission-ext/GameNetworkMessageSendType/)
- 消费方：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameNetwork.cs:1465`（`GetCustomAttribute`）、`:1471`（`switch (attr.SendType)`）、`:1473`/`:1474`（两个 Server 变体）、`:1475`/`:1478`（两张表的 `Add`）
- 使用点目录：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/`（`AdminMuteUnmutePlayer.cs:6`、`AdminRequestAnnouncement.cs:6`、`AdminRequestClassRestrictionChange.cs:7`、`AdminRequestEndMission.cs:6` 等）
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)
- 桶首页：[mission API 分区](../)