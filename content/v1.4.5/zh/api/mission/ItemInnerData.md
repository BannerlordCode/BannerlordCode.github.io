---
title: "ItemInnerData"
description: "mpitems.xml 里一条道具记录的反序列化产物：三个只读属性，其中 Type 只有 XML 里写了 <flag name=\"type\"> 才有值，否则留 null。"
---

# ItemInnerData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `internal class ItemInnerData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ItemInnerData.cs`

## 概述

`ItemInnerData` 是 34 行、4 个成员的 **XML 反序列化产物**。它只有三个 `internal` 属性（全部 `{ get; private set; }`）：`TypeId`（`:8`）、`Type`（`:10`）、`Price`（`:12`），以及一个写入方法 `Deserialize(XmlNode)`（`:14-33`）。

它**没有构造器，也没有默认值** —— 三个属性的初值都是 `default`（`string` 为 null、`int` 为 0、`ItemType` 为 `Invalid`）。**唯一的填值路径是 `Deserialize`。** 唯一的创建点是 [ItemList](../ItemList/) 的静态构造器（`ItemList.cs:33` 的 `new ItemInnerData()`）。

## 心智模型

把它当成**「一行 XML 变成三个字段」**。三条推论：

第一,`Type` 的赋值条件很窄：`Deserialize` 里两层循环都命中 `<flag name="type">` 才会写。`:18` 先遍历 `node.ChildNodes` 跳过非 `flags` 元素（`:20-23`），`:24` 再遍历 `flags` 的子节点，`:26` 要求 `childNode2.Name == "flag" && childNode2.Attributes["name"].Value == "type"`，才在 `:29` 做 `Enum.Parse`。**所以一条缺 `<flags><flag name="type" value="…"/></flags>` 的记录，`Type` 会停在枚举默认值 `Invalid`（`ItemType.cs:5`），而不是抛异常。**

第二,**`TypeId` 与 `Price` 无条件读，缺失就抛。** `:16` 是 `node.Attributes["id"].Value` —— 属性不存在时 `Attributes["id"]` 返回 null，紧接着 `.Value` 抛 `NullReferenceException`；`:17` 的 `value` 属性则做了 null 检查（缺省 0）。**同一个方法里两种缺失处理方式。**

第三,**它不是不可变对象，setter 是 private 但 `Deserialize` 会重复调用。** 没有「已反序列化」标记。**第二次调 `Deserialize` 会覆盖前三个字段**（对 `Type` 而言，若第二次的 XML 仍无 `type` flag，它会保留上次的值而不是回落 `Invalid`——因为 `:29` 不执行）。

边界：**`internal` 类，编译期不可引用。** `Type` 的类型 [ItemType](../ItemType/) 同样是 `internal`。

## 如何使用

**怎么拿到它**：`ItemList` 静态构造器里 `new ItemInnerData()` 后立刻 `Deserialize(childNode)`（`ItemList.cs:33-34`），再按 `TypeId` 入表。**mod 编译期拿不到它**，也无法自己造——所以「怎么用」实质上等于「怎么读它的三个字段」，而那要通过 `ItemList` 的三个静态方法。

XML 的期望形状（三层嵌套，逐层都有过滤）：

```xml
<Items>
  <Item id="some_id" value="100">        <!-- :16 读 id（必需）  :17 读 value（可缺省 0） -->
    <flags>                              <!-- :18-23 跳过非 flags 的子节点 -->
      <flag name="type" value="horse"/>  <!-- :26 要求 name=="type"，:29 Enum.Parse(ignoreCase) -->
    </flags>
  </Item>
</Items>
```
上面这段 XML 的三个结果是：`TypeId == "some_id"`、`Price == 100`、`Type == ItemType.Horse`。

复现 `Deserialize` 的判定链（这是本类全部逻辑）：

```csharp
using System;
using System.Xml;

// :26 的条件是 childNode2.Name == "flag" && childNode2.Attributes["name"].Value == "type"
//   —— 两段都必须是精确匹配（大小写敏感），只匹配 name 不看 value
// :29 Enum.Parse(typeof(ItemType), value, ignoreCase: true) —— value 大小写不敏感
//   若 value 不是 ItemType 的 26 个成员之一，抛 ArgumentException
bool matches = "flag" == "flag" && "type" == "type";
Debug.Print("flag 判定 = " + matches + "（name 比较大小写敏感，value 解析大小写不敏感）", 0);
```

**用它最容易踩的一条**：**`Price` 缺失默认 0，而 `id` 缺失直接崩。** `:17` 的 `((node.Attributes["value"] != null) ? int.Parse(...) : 0)` 对 `value` 做了保护，**但 `:16` 的 `node.Attributes["id"].Value` 没有。** 所以一条 `<Item value="100"/>` 会让整个加载流程在 `:16` 处抛 `NullReferenceException` —— **而不是「这条被跳过」。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TypeId` | `internal string TypeId { get; private set; }` | **道具 id，也是主键。** `:16` 无条件从 `node.Attributes["id"].Value` 读，**缺失即 `NullReferenceException`**。`ItemList` 的 `_items` 字典就以它为键（`ItemList.cs:36`/`:38`），重复时先出现者获胜。 |
| `Type` | `internal ItemType Type { get; private set; }` | **道具类型。** **只有 `:26` 的双重条件命中时才在 `:29` 被赋值**，否则留在枚举默认值 `Invalid`（`ItemType.cs:5`）。`private set` + 无 `= ItemType.Invalid` 初始化 ⇒ **「XML 没写 type」与「写了 Invalid」在本类里不可区分。** |
| `Price` | `internal int Price { get; private set; }` | 道具价格。`:17` 读 `value` 属性，**缺失时取 0**（有 null 保护）。无上限校验 —— XML 写多少就是多少。 |
| `Deserialize` | `internal void Deserialize(XmlNode node)` | **唯一的写入路径（`:14-33`）。** 三段：`:16` 读 `id`（无保护）→ `:17` 读 `value`（`!= null` 则 `int.Parse`，否则 0）→ `:18-32` 两层循环找 `flags/flag[@name="type"]` 并 `Enum.Parse`。**没有 null 检查 `node` 本身。** 可重复调用且会覆盖前三个字段。 |

## 真实示例

四个字段的赋值条件对照（这张表就是本类的全部）：

```csharp
// TypeId  :16  node.Attributes["id"].Value            -> 属性缺失 => NullReferenceException
// Price   :17  Attributes["value"] != null ? int.Parse : 0  -> 属性缺失 => 0（安全）
// Type    :29  仅当 <flags><flag name="type" value="…"/></flags> 才写
//               否则留在 default => ItemType.Invalid（ItemType.cs:5 的第 0 个成员）
Debug.Print("TypeId 硬崩 / Price 兜底 0 / Type 静默留 Invalid", 0);
```

两层过滤的精确条件（改 XML 时最容易写错的地方）：

```csharp
// 第 1 层（:18-23）：遍历 node.ChildNodes，childNode.Name == "flags" 才处理，其余 continue
// 第 2 层（:24-31）：遍历 flags.ChildNodes
//   :26  childNode2.Name == "flag" && childNode2.Attributes["name"].Value == "type"
//        ↑ "flag" 与 "type" 两个字面量都是【大小写敏感】的精确匹配
//   :28-29  取该 flag 的 value 属性，Enum.Parse(typeof(ItemType), value, ignoreCase: true)
//        ↑ 只有 value 是大小写【不敏感】的
Debug.Print("<Flag name=\"Type\">（大写 T）不会被匹配", 0);
```

## 风险与边界

- **`internal` 类与 `internal` 枚举，`Type` 字段的公开面受限。** 编译期 mod 看不到 `ItemType`，也就看不到 `Type` 的取值含义。
- **`id` 属性缺失 ⇒ `NullReferenceException`。** `:16`。**会中断整个 `ItemList` 的加载流程**（它在静态构造器的循环里）。
- **`Type` 留默认值时不可区分「没配」与「配成 Invalid」。** `Invalid` 本身就是 `ItemType` 的第 0 个成员（`ItemType.cs:5`）。**所以「合法的 Invalid 类型」与「没写 type」在读取端无法分辨。**
- **`Deserialize` 可重复调用并覆盖。** 没有幂等保护、没有「已解析」标记。**第二次解析若 XML 里没有 `type` flag，`Type` 会保留上次的值**（因为 `:29` 不执行）。
- **`node` 本身无 null 检查。** `:16` 立即解引用。
- **`Enum.Parse` 的失败抛 `ArgumentException`。** `:29` 只对大小写宽容；写 `multibattleperk` 可以，写 `multiplayer_perk`（下划线）不行。
- **`Price` 无上限与负值校验。** `:17` 只是 `int.Parse`。
- **XML 属性名区分大小写。** `.NET XmlDocument` 的 `Attributes["id"]` 是区分大小写的 —— XML 里写 `ID` 就取不到。

## 参见

- 唯一的创建者与消费者：[ItemList](../ItemList/)（`ItemList.cs:33` 的 `new ItemInnerData()`、`:34` 的 `Deserialize`、`:36-38` 按 `TypeId` 入表、`:50` 与 `:60` 读 `Type`/`Price`）
- 字段类型：[ItemType](../ItemType/)（26 个成员，`ItemType.cs:3` 的 `internal enum`，`Invalid` 在 `:5`）
- 数据源：`mpitems.xml`（**不在源码树内**，所以我无法给出真实条目）
- 同桶：[HitType](../HitType/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 桶首页：[mission API 分区](../)