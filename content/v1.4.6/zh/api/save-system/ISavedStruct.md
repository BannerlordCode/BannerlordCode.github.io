---
title: "ISavedStruct"
description: "只含 IsDefault() 一个成员的标记接口：结构体实现它并返回 true 时，保存器会把这个元素当成默认值从容器里省掉。"
---
# ISavedStruct

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface ISavedStruct`
**Source:** `TaleWorlds.SaveSystem/ISavedStruct.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ISavedStruct` 是一个**只有一个成员的契约接口**：`bool IsDefault()`。它的语义不是「这个结构体有没有数据」，而是「**这个元素是否等于默认值，因此可以从容器里省略**」。它是存档体积的优化钩子，不是序列化协议。

消费点只有一个，在 `TaleWorlds.SaveSystem/Save/ContainerSaveData.cs:216` 的 `ShouldSaveStruct` 里：

```csharp
// TaleWorlds.SaveSystem/Save/ContainerSaveData.cs:215-216
ISavedStruct savedStruct;
if (structDefinition == null || !(structDefinition is StructDefinition)
    || (savedStruct = objectSaveData.Target as ISavedStruct) == null
    || !savedStruct.IsDefault())
{
    return true;   // 保存这个元素
}
```

逻辑读法是「除非**同时**满足『有结构体定义』『目标实现了 `ISavedStruct`』『`IsDefault()` 返回 true』，否则一律保存」。也就是说：实现该接口并正确返回 `true` 时，`List<TroopRosterElement>` 这类容器里那些「全零」的元素不会落盘。

## 心智模型

把它想成**容器的稀疏化开关**，而不是「结构体的序列化接口」：

- 不实现 `ISavedStruct` ⇒ 每个元素都写盘。安全但体积大。
- 实现且 `IsDefault()` 恒返回 `false` ⇒ 行为和没实现一样，只是多了一次虚调用。
- 实现且 `IsDefault()` 在「空元素」上返回 `true` ⇒ 那些元素被跳过，读档时由结构体的默认构造补齐。

关键在于**跳过是「不写」而不是「写 0」**。所以 `IsDefault()` 必须精确对应「结构体的默认值状态」：如果某个字段的默认值不是 `0`/`null`（例如默认 id 是 `-1`），`IsDefault()` 就必须按那个约定判断，否则读回来的元素会与写出去的不一致。

真实实现者都是 campaign/core 里高频出现在容器中的值类型，例如 `TaleWorlds.CampaignSystem/CampaignVec2.cs:10` 的 `public struct CampaignVec2 : ISavedStruct`（实现于 `CampaignVec2.cs:236`）、`TaleWorlds.CampaignSystem/Roster/TroopRosterElement.cs:11`、`TaleWorlds.Core/EquipmentElement.cs:11`、`TaleWorlds.Core/ItemRosterElement.cs:10`、`TaleWorlds.Core/UniqueTroopDescriptor.cs:8`、`TaleWorlds.CampaignSystem/Roster/FlattenedTroopRosterElement.cs:9`。

## 怎么用

### 怎么拿到

接口本身没有静态入口，也没有单例——它是「实现」型契约。你在结构体声明里加上它，然后提供 `IsDefault()`：

```csharp
public struct CampaignVec2 : ISavedStruct   // TaleWorlds.CampaignSystem/CampaignVec2.cs:10
{
    public bool IsDefault()                 // TaleWorlds.CampaignSystem/CampaignVec2.cs:236
    {
        // 真实实现：判断自己是不是「无效/空」的那一个
        return false;                       // 具体判据见源码
    }
}
```

也可以像 `TroopRosterElement` 那样**显式接口实现**，把方法藏起来：

```csharp
// TaleWorlds.CampaignSystem/Roster/TroopRosterElement.cs:202
bool ISavedStruct.IsDefault() { /* ... */ }
```

显式实现的好处是 `IsDefault` 不会出现在结构体的公开 API 面上；代价是只能通过接口引用调用。

### 典型用法

给一个会被放进 `List<T>` / `Dictionary<TKey, TValue>` 的结构体做稀疏化：

```csharp
using TaleWorlds.SaveSystem;

public struct MyLedgerRow : ISavedStruct
{
    [SaveableField(1)] public int Gold;
    [SaveableField(2)] public int Debt;

    // 两个字段都为 0 时视为「空行」，不必写进存档
    public bool IsDefault()
    {
        return Gold == 0 && Debt == 0;
    }
}

// 只要这个结构体在某个 SaveableTypeDefiner 里注册过 struct 定义，
// 它出现在容器里时就会走 ShouldSaveStruct 的判断。
```

### 坑

- **默认值约定必须自洽。** 若你的结构体用 `-1` 表示「无」而字段实际是 `int`，`IsDefault()` 就不能写 `Gold == 0`。读档侧不会给你补一个 `-1`，它只给你 `default(T)`。
- **只在「有 `StructDefinition` 且目标是结构体」时才生效。** 引用类型即使实现了 `ISavedStruct`，`structDefinition is StructDefinition` 这一项也不成立，条件短路到 `return true`，照常保存。
- **`IsDefault()` 会被高频调用。** 它在容器写盘路径上对每个元素调一次，别在里面做分配或查询。
- **返回 `true` 不等于「这个元素不存在」。** 它只表示不落盘；读回来时容器长度仍由容器自己的头部决定，元素内容为 `default(T)`。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `IsDefault` | `bool IsDefault()` | 唯一契约成员。返回 `true` 表示「本元素等于默认值」，保存器据此把它从容器里省掉（判定在 `TaleWorlds.SaveSystem/Save/ContainerSaveData.cs:216`）。实现必须是纯函数、无分配，且判据要匹配该结构体的真实默认值约定。 | `TaleWorlds.CampaignSystem/CampaignVec2.cs:236` |

表外说明：接口本体只有这一个方法，声明在 `ISavedStruct.cs` 的接口体内；上表第 4 列引的是该成员的一份真实实现，便于对照写法。

## 真实示例

一个「默认值不是 0」的结构体，说明为什么不能照抄 `== 0`：

```csharp
public struct MyHandle : ISavedStruct
{
    [SaveableField(1)] public int Id;      // 约定：-1 表示无效句柄

    public bool IsDefault()
    {
        // 若写成 Id == 0 就错了：默认构造出来的是 0，而 0 是合法句柄
        return Id == -1;
    }
}
```

容器侧的真实判定逻辑（读懂它就明白生效条件有多严）：

```csharp
// TaleWorlds.SaveSystem/Save/ContainerSaveData.cs:215-216
ISavedStruct savedStruct;
if (structDefinition == null || !(structDefinition is StructDefinition)
    || (savedStruct = objectSaveData.Target as ISavedStruct) == null
    || !savedStruct.IsDefault())
{
    return true;
}
```

`TroopRosterElement` 用的是显式接口实现，公开 API 上不出现 `IsDefault`：

```csharp
// TaleWorlds.CampaignSystem/Roster/TroopRosterElement.cs:202
bool ISavedStruct.IsDefault()
{
    return Character == null && Number == 0 && WoundedNumber == 0 && Xp == 0;
}
```

## 参见

- [`../../campaign/TroopRoster`](../../campaign/TroopRoster) —— 容器侧最典型的宿主，`TroopRosterElement` 的稀疏化直接服务于它。
- [`../../campaign/Hero`](../../campaign/Hero) —— `EquipmentElement` / `ItemRosterElement` 这类可空元素引用的对象。
- [`../SaveableTypeDefiner`](../SaveableTypeDefiner) —— 结构体要先有 `AddStructDefinition`，本接口才可能被判定到。
- [`../_index`](../_index) —— `save-system` 桶全类型索引。

## 导航

- 同桶：[`../SaveableRootClassAttribute`](../SaveableRootClassAttribute) · [`../SaveableInterfaceAttribute`](../SaveableInterfaceAttribute) · [`../SaveableTypeDefiner`](../SaveableTypeDefiner)
- 父索引：[`../_index`](../_index)
