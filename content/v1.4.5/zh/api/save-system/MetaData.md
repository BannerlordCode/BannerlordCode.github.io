---
title: "MetaData"
description: "存档的元信息载体：一张 string→string 表，被序列化成「4 字节长度 + UTF8 JSON」。同一个「key 不存在/已存在」的问题，三个成员给出三种行为——Add 抛、索引器 setter 覆盖、索引器 getter 返 null。"
---

# MetaData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class MetaData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/MetaData.cs`

## 概述

`MetaData` 是 70 行的**公开数据载体**，内部只有一张 `Dictionary<string, string>`（`:12`，字段名 `_list`，带 `[JsonProperty("List")]`）。它对外暴露 6 个成员：`Count`（`:15`）、字符串索引器（`:17-31`）、`Keys`（`:34`）、`Add`（`:36-39`）、`TryGetValue`（`:41-44`），以及两个**静态/实例成对的序列化方法** `Serialize(Stream)`（`:46-52`）与 `Deserialize(Stream)`（`:54-69`）。

它不存游戏状态，只存**存档的元信息**（游戏版本、平台等键值对）。两个驱动直接调它：`FileDriver.cs:34`/`:56`/`:68` 与 `InMemDriver.cs:16`/`:25`/`:33`。

## 心智模型

把它当成**「一张键值表 + 一个自定义二进制信封」**。**这一页的骨架是下面这张表，而不是成员清单** —— 因为本类最该记住的不是「有哪些成员」，而是「同一个问题，三个成员三种行为」：

| 你做的事 | 走哪个成员 | 源码 | 键【不存在】时 | 键【已存在】时 |
|---|---|---|---|---|
| 写入（Add） | `Add(string,string)` | `:38` `_list.Add(key, value)` | **新建，正常** | **抛 `ArgumentException`** |
| 写入（索引器） | `this[key] = value` | `:29` `_list[key] = value` | **新建，正常** | **静默覆盖** |
| 读取（索引器） | `this[key]` | `:21-24` `if (!_list.ContainsKey(key)) return null;` | **返回 `null`** | 返回值 |
| 读取（安全版） | `TryGetValue` | `:43` `_list.TryGetValue` | **返回 `false`、out 为 null** | 返回 `true` |

**⇒ 三条要记住的推论：**

**第一，`Dictionary` 的两条 API 被原样暴露成两种写语义。** `Add` 走 `Dictionary.Add`（撞键抛）、索引器 setter 走索引器赋值（撞键覆盖）—— **这不是笔误，是两条 API 的固有差异，而本类同时提供了它们。混用两者的代码，行为取决于最后一次用的是哪一条。**

**第二，getter 的「返 null」是 modder 最常撞的那一条。** 读一个不存在的键**不抛、也不返回「不存在」的标记**，只是 `null`。**⇒ `string s = md["x"]; if (s != null)` 是唯一安全的索引器读法**（对不存在的键返回非 null 就要用 `TryGetValue`）；而 `if (md["x"] != "")` 会在键值本来就是空串时判错。**

**第三，序列化格式是「4 字节小端长度 + UTF8 JSON」，而三处 `Read` 都不检查实际读了多少。** `:48`-`:51` 写：先 `BitConverter.GetBytes(bytes.Length)` 取 4 字节，再 `stream.Write(bytes2, 0, 4)`，然后写 JSON 字节。反向的 `:58`/`:61`/`:62` 三处 `stream.Read(...)` **返回值全部丢弃** —— **⇒ 遇到长度不足的流，`BitConverter.ToInt32` 仍会读满 4 字节（哪怕后面是垃圾），而第二段读到的字节数没人核对。** 再加上 `:65-67` 的空 `catch { return null; }`，**所有失败最终都表现为「`MetaData` 是 null」。**

## 如何使用

**怎么拿到它**：`MetaData` 是 `public class` 且有公开无参构造（编译器生成），**mod 可以直接 `new`** —— 这是本桶少见的可直接实例化的类型。反序列化路径是 `MetaData.Deserialize(Stream)`。

读写键值的三种方式，以及它们在撞键时的分歧：

```csharp
using TaleWorlds.SaveSystem;

MetaData md = new MetaData();
md.Add("Version", "1.4.5");        // :38  _list.Add —— 首次 OK
md["Platform"] = "PC";              // :29  _list[key] = —— 索引器 setter

Debug.Print("Count=" + md.Count, 0);            // :15  _list.Count
Debug.Print("Version=" + md["Version"], 0);     // :21-26 命中则返回值
Debug.Print("Missing=[" + md["nope"] + "]", 0); // :21-24 缺失返回 null
Debug.Print("Keys=" + string.Join(",", md.Keys), 0);   // :34  _list.Keys
```

**用它最容易踩的一条**：**同一个键写两次，`Add` 会抛而索引器会覆盖。** 实测 `md.Add("k","1"); md.Add("k","2");` ⇒ `_list.Add` 撞键 → **`ArgumentException`**。而 `md["k"]="1"; md["k"]="2";` ⇒ 静默变成 `"2"`。**⇒ 混用这两条 API 的代码，行为取决于最后一次用的是哪一条。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_list` | `[JsonProperty("List")] private Dictionary<string, string> _list = new Dictionary<string, string>()` | 唯一的存储（`:11-12`）。**`[JsonProperty("List")]` 把私有字段的 JSON 名固定为 `"List"`** —— 改字段名会改变存档格式。**`private` + 无公开访问器**，只能经索引器/`Keys`/`Count` 触达。 |
| `Count` | `[JsonIgnore] public int Count => _list.Count` | 表内键数（`:14-15`）。**`[JsonIgnore]` ⇒ 不进 JSON**（否则 `Count` 会被写进存档，而它又是从 `_list` 派生的）。 |
| 索引器 | `public string this[string key]` | **读写主入口（`:17-31`）。** getter（`:19-26`）先 `ContainsKey` 再取值，**缺失返回 `null`；setter（`:27-30`）直接 `_list[key] = value`，撞键覆盖。** |
| `Keys` | `[JsonIgnore] public Dictionary<string, string>.KeyCollection Keys => _list.Keys` | 键集合的**活视图**（`:33-34`）—— 返回的是 `_list.Keys` 本身，不是拷贝。**⇒ 遍历期间增删键会抛。** |
| `Add` | `public void Add(string key, string value)` | `_list.Add(key, value)`（`:36-39`）。**撞键抛 `ArgumentException`** —— 与索引器 setter 相反。 |
| `TryGetValue` | `public bool TryGetValue(string key, out string value)` | 转发 `_list.TryGetValue`（`:41-44`）。**这是本类唯一不会因缺键而给出 `null` 的读取方式。** |
| `Serialize` | `public void Serialize(Stream stream)` | **写「4 字节长度 + JSON」（`:46-52`）。** `:48` `JsonConvert.SerializeObject(this)`（**序列化的是 `this`，所以 `[JsonIgnore]` 的成员被排除**）；`:49` 取长度；`:50` 先写 4 字节；`:51` 再写正文。**无版本号、无校验和。** |
| `Deserialize` | `public static MetaData Deserialize(Stream stream)` | 读回（`:54-69`）。`:58` 读 4 字节、`:60` `BitConverter.ToInt32`、`:61` 按该长度分配、`:62` 读正文、`:63` `JsonConvert.DeserializeObject<MetaData>`。**`:65-67` 的空 `catch` 返回 `null`；三处 `Read` 的返回值都没检查。** |

## 真实示例

二进制信封的字节布局（`Serialize` 与 `Deserialize` 必须成对看）：

```csharp
// Serialize（:46-52）
//   :48  byte[] body  = UTF8(JsonConvert.SerializeObject(this))
//   :49  byte[] len4  = BitConverter.GetBytes(body.Length)   // 4 字节小端
//   :50  stream.Write(len4, 0, 4)
//   :51  stream.Write(body, 0, body.Length)
// Deserialize（:54-69）
//   :58  stream.Read(array, 0, 4)      // 返回值【丢弃】
//   :60  int num = BitConverter.ToInt32(array, 0)
//   :61  byte[] body = new byte[num]  // num 完全信任流内容
//   :62  stream.Read(body, 0, num)     // 返回值【丢弃】—— 读少了不会发现
//   :63  return JsonConvert.DeserializeObject<MetaData>(UTF8(body))
//   :65  catch { return null; }         // 任何失败都变成 null
Debug.Print("布局 = [4 字节长度][UTF8 JSON]；读端 3 处 Read 全不检查返回值", 0);
```

两个驱动的调用点（说明这套格式的实际消费者）：

```csharp
// FileDriver.cs:34   metaData.Serialize(memoryStream);                写
// FileDriver.cs:56   return MetaData.Deserialize(new MemoryStream(metaDataContent));  读（返回 MetaData 直接当返回值）
// FileDriver.cs:68   MetaData metaData = MetaData.Deserialize(stream); 读（局部变量，之后要判空）
// InMemDriver.cs:16  metaData.Serialize(memoryStream);
// InMemDriver.cs:25  MetaData result = MetaData.Deserialize(memoryStream);
// InMemDriver.cs:33  MetaData metaData = MetaData.Deserialize(stream);
// ⇒ 6 个调用点，两个驱动各 3 个；:56 与 :68 的使用方式不同（一个当返回值、一个当局部变量）
Debug.Print("FileDriver 3 处 + InMemDriver 3 处", 0);
```

## 风险与边界

- **「序列化的是 `this`」是个耦合点。** `:48`。**给本类加任何新的 public 属性都会立刻进存档 JSON**（除非加 `[JsonIgnore]`）—— 而 `Count`（`:14`）与 `Keys`（`:33`）正是这样排除的。**⇒ 加成员时必须同时决定要不要 `[JsonIgnore]`。**
- **`Deserialize` 的空 catch 返回 `null`。** `:65-67`。**失败与「空表」在调用方看来不同（一个是 null、一个是 Count=0），但失败原因被完全丢弃。**
- **三处 `stream.Read` 的返回值全部未检查。** `:58`/`:61`/`:62`。**流被截断时不会抛，而是继续用垃圾数据。**
- **长度字段完全信任流内容。** `:60`/`:61`。**一个损坏的长度值会导致 `new byte[num]` 分配异常大的数组或抛 `OverflowException`** —— 后者被 `:65` 的空 catch 吃掉，**所以表现为返回 null。**
- **`Add` 撞键抛、索引器覆盖。** `:38` vs `:29`。见「最容易踩的一条」。
- **`Keys` 返回活视图。** `:34`。遍历期间改表会抛。
- **本类不是线程安全的**，`Dictionary` 本身无并发保护 —— 我**没有找到任何加锁**，故不断言实际使用场景是否单线程。
- **格式无版本号、无校验和。** `:46-52` 只写长度与 JSON。**⇒ 兼容性完全靠调用方自己处理。**

## 参见

- 两个消费者：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/FileDriver.cs:34`/`:56`/`:68` 与 `InMemDriver.cs:16`/`:25`/`:33`
- 同桶：[SaveContext](../SaveContext/)（`Save(object, MetaData, out string)` 的 `metaData` 形参在方法体内零次出现）、[LoadContext](../LoadContext/)（读档侧入口）、[LoadData](../LoadData/)（读档输入包，装 `MetaData` + `GameData`）
- 序列化依赖：`Newtonsoft.Json`（`JsonConvert` / `JsonProperty` / `JsonIgnore`，`:5`）
- 同类的「空 catch 返回 null」形态：[LegacyGameDataDeserializer](../LegacyGameDataDeserializer/)
- 桶首页：[save-system API 分区](../)