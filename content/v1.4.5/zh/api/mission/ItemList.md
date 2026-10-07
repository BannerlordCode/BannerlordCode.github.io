---
title: "ItemList"
description: "多人道具表的静态加载器：在静态构造器里读 mpitems.xml，一旦根节点不是 Items 就抛异常；而三个查询方法里有两个在 key 不存在时直接抛 KeyNotFoundException。"
---

# ItemList

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `internal class ItemList`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ItemList.cs`

## 概述

`ItemList` 是 62 行的**静态数据加载器**。它有一个 `private static Dictionary<string, ItemInnerData> _items`（`:11`），并在**静态构造器**（`:13-46`）里一次性把 `mpitems.xml` 读进来。它只有三个查询方法：`GetItemTypeOf`（`:48`）、`IsItemValid`（`:53`）、`GetPriceOf`（`:58`）——**全是 `internal static`，无实例成员。**

XML 路径由 `:17` 给出 `ModuleHelper.GetModuleFullPath("Native") + "ModuleData/mpitems.xml"`，但 `:18-21` 允许用 `ConfigurationManager.GetAppSettings("MultiplayerItemsFileName")` **整体覆盖**它。

## 心智模型

把它当成**「一次性建表、之后只查」**。三条推论：

第一,**加载发生在静态构造器里，所以第一次访问任何一个静态成员就触发。** `:13` 的 `static ItemList()` 会 `xmlDocument.Load(filename)`（`:22`）——**若文件不存在或 XML 格式错误，抛的是 `XmlException`/`FileNotFoundException`，而不是本类自定义的异常。**

第二,**三个查询方法的失败形态各不相同。** `IsItemValid`（`:53-56`）用 `ContainsKey`，**安全返回 false**；而 `GetItemTypeOf`（`:48-51`）与 `GetPriceOf`（`:58-61`）都是 `_items[typeId].…` —— **key 不存在时抛 `KeyNotFoundException`，没有 TryGetValue 保护。** 三个方法形似，用起来的安全性却差一档。

第三,**重复的 id 不会覆盖，只会被打印出来。** `:36-43`：先 `ContainsKey` 判断，存在就打一条 `Debug.Print`（`:42`）然后 `continue` 跳过。**所以「后出现的同 id 条目被丢弃」是既定行为，不是 bug。** 且 `:35` 与 `:28` 各有一条 `Debug.Print`，**加载时会把每个道具 id 都打进日志。**

边界：**`internal` 类**，编译期不可引用。它的数据源是 `mpitems.xml`，**该文件不在 v1.4.5 源码树里**（源码树只有 `.cs`），所以我**无法断言它实际包含哪些道具 id**。

## 如何使用

**怎么拿到它**：**三个静态方法，任意一个都会触发静态构造器。** 典型形状是 `IsItemValid` 先判存在再查值：

```csharp
using TaleWorlds.MountAndBlade.Diamond;

// ItemList 是 internal -> mod 编译期不可引用；下面这条演示的是它的查询语义
// IsItemValid(typeId, modifierId) 只看 typeId，modifierId 参数被完全忽略（:53-56）
// GetItemTypeOf(typeId) 与 GetPriceOf(itemId, modifierId) 都用 _items[key] -> key 不存在则 KeyNotFoundException
Debug.Print("IsItemValid 安全（ContainsKey），另两个方法不安全（索引器）", 0);
```

三个方法的失败形态对照（这是本类最该记住的一条）：

```csharp
// IsItemValid（:53-56）  return _items.ContainsKey(itemId);          => 永远返回 bool，不抛
// GetItemTypeOf（:48-51） return _items[typeId].Type;                  => key 缺失 => KeyNotFoundException
// GetPriceOf（:58-61）   return _items[itemId].Price;                 => key 缺失 => KeyNotFoundException
// 注意 GetItemTypeOf 的形参名是 typeId，GetPriceOf 的是 itemId，IsItemValid 的第二个形参 modifierId 没用上
Debug.Print("两个索引器方法无保护；modifierId 在三个方法里都被忽略", 0);
```

`mpitems.xml` 路径的三段逻辑（`:16-22`）：

```csharp
using TaleWorlds.Library;
using TaleWorlds.ModuleManager;

// :17  默认 = ModuleHelper.GetModuleFullPath("Native") + "ModuleData/mpitems.xml"
// :18-21 若 ConfigurationManager.GetAppSettings("MultiplayerItemsFileName") != null 则【整体覆盖】
// :22  xmlDocument.Load(filename)  —— 路径错误时抛 XmlException/FileNotFoundException，不是自定义异常
// :23-27 SelectSingleNode("Items") 为 null 时 throw new Exception("'Items' node is not defined in mpitems.xml")
Debug.Print("路径可被 MultiplayerItemsFileName 覆盖；根节点必须叫 Items", 0);
```

**用它最容易踩的一条**：**`modifierId` 是三个方法里都存在的废参数。** `IsItemValid`（`:54` 的 `modifierId`）、`GetPriceOf`（`:59` 的 `modifierId`）收下它但**从不出现在方法体里**。**传什么都不影响结果。** 这意味着「同一种道具的不同品质 modifier 有不同价格」这类预期在本类里不成立——**要拿 modifier 的差异，得去看别处。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_items` | `private static Dictionary<string, ItemInnerData> _items` | 整张道具表。**`:15` 在静态构造器里 new 一次**（`new Dictionary<string, ItemInnerData>()`），之后全类共享。**`private` + 无锁** —— 静态构造器保证只初始化一次，所以并发读是安全的；**但没有任何方法能替换这个引用。** |
| 静态构造器 | `static ItemList()` | **全部加载逻辑（`:13-46`）。** 六步：`:15` 建字典 → `:16-17` 算 XML 路径 → `:18-21` 可选覆盖 → `:22` `Load` → `:23-27` 找 `Items` 根节点，null 则 `throw new Exception` → `:29-44` 遍历子节点，逐个 `new ItemInnerData()` + `Deserialize`，再按 `TypeId` 去重入表。**整个类没有显式构造器，也没有实例字段。** |
| `GetItemTypeOf` | `internal static ItemType GetItemTypeOf(string typeId)` | **查道具类型（`:48-51`）。** `:50` 是 `_items[typeId].Type`。**无 `TryGetValue` 保护 ⇒ key 缺失抛 `KeyNotFoundException`。** 返回的 [ItemType](../ItemType/) 来自 `ItemInnerData.Deserialize` 的 XML 解析。 |
| `IsItemValid` | `internal static bool IsItemValid(string itemId, string modifierId)` | **唯一安全的查询（`:53-56`）。** `:55` 用 `ContainsKey`。**形参 `modifierId` 收下但不使用** —— 这是本类最容易误导调用方的地方。 |
| `GetPriceOf` | `internal static int GetPriceOf(string itemId, string modifierId)` | **查价格（`:58-61`）。** `:60` 是 `_items[itemId].Price`。**同样无保护 ⇒ 抛 `KeyNotFoundException`；`modifierId` 同样不使用。** |

## 真实示例

静态构造器的失败点（按发生顺序，四个不同的异常）：

```csharp
using System.Xml;
using TaleWorlds.Library;
using TaleWorlds.ModuleManager;

// ① ModuleHelper.GetModuleFullPath("Native") + "ModuleData/mpitems.xml"（:17）路径不存在
//    -> xmlDocument.Load 抛 FileNotFoundException（:22）
// ② 文件存在但 XML 语法错 -> 抛 XmlException（:22）
// ③ 根节点不是 <Items> -> throw new Exception("'Items' node is not defined in mpitems.xml")（:26）
//    ↑ 这是本类唯一一条自造的异常消息，是唯一能据此定位配置错误的线索
// ④ 之后每次 GetItemTypeOf / GetPriceOf 遇到未知 key -> KeyNotFoundException（:50 / :60）
Debug.Print("四个不同的失败点，只有第 3 个有自定义消息", 0);
```

去重的确切行为（`:36-43`）：

```csharp
// :36  if (!_items.ContainsKey(itemInnerData.TypeId))
// :38      _items.Add(itemInnerData.TypeId, itemInnerData);
// :40-42  else Debug.Print("--- Item type id already exists, check mpitems.xml for item type Id:" + …)
// => 先出现的条目获胜，后出现的被【丢弃】且不覆盖，键是 TypeId（不是 id 属性之外的东西）
Debug.Print("重复 id：先出现者获胜，后者被丢弃并打印告警", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** mod 无法直接调用它的三个静态方法。
- **静态构造器里可能抛四种不同的异常。** 见「真实示例」。**只有「根节点不是 `Items`」那一条有自定义消息。**
- **`GetItemTypeOf` / `GetPriceOf` 无 key 保护。** `:50` / `:60` 的索引器。**必须先 `IsItemValid` 判存在。**
- **`modifierId` 是废参数。** `IsItemValid`（`:54`）与 `GetPriceOf`（`:59`）都收下但不使用。**传什么都一样。**
- **`mpitems.xml` 不在源码树里。** 我**无法断言它实际含哪些 id**，也无法验证 `ItemType` 的值域是否被用满。
- **加载时会向日志打大量输出。** `:28` 打根节点名、`:35` 打每个 `TypeId`、`:42` 打重复告警。**道具表大时启动日志会被刷屏。**
- **`_items` 无替换入口。** `private static` 且没有重新加载方法。**改 XML 必须重启游戏。**
- **重复 id 静默丢弃后出现者。** `:40-43` 只 `Debug.Print`，不抛异常、不退出加载。**同一 id 配了两种类型时，先出现的那条生效。**
- **`ItemType` 的值域有 26 个成员**（`ItemType.cs:5-30`，从 `Invalid` 到 `ArmorExtra`），而 `:29` 的 `Enum.Parse(..., ignoreCase: true)` **只做大小写不敏感的精确匹配** —— XML 里写 `multibattleperk` 可以，写 `multiplayer_perk` 会抛 `ArgumentException`。

## 参见

- 数据载体：[ItemInnerData](../ItemInnerData/)（`TypeId` / `Type` / `Price` 三个属性与它的 `Deserialize`）、[ItemType](../ItemType/)（26 个枚举成员，`ItemType.cs:3`）
- 加载来源：`mpitems.xml`（**不在源码树内**）；`ModuleHelper.GetModuleFullPath("Native")`（`:17`）、`ConfigurationManager.GetAppSettings("MultiplayerItemsFileName")`（`:18`）
- 同桶：[HitType](../HitType/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 桶首页：[mission API 分区](../)