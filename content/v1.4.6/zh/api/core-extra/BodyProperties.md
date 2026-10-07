---
title: "BodyProperties"
description: "角色体型数据：动态参数（年龄/体重/体型）+ 8 个 ulong 静态键构成的脸部特征位包，可从 XML 解析、随机生成、序列化回 XML 串。"
---
# BodyProperties

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct BodyProperties`
**Base:** `System.ValueType`
**File:** `TaleWorlds.Core/BodyProperties.cs`

## 概述

这是**结构体**（不是类），标了 `[Serializable]` 和 `[JsonConverter(typeof(BodyPropertiesJsonConverter))]`。内部只有两个 `readonly` 字段：一个 `DynamicBodyProperties`（年龄 `Age`、体重 `Weight`、体型 `Build` 三个 float）和一个 `StaticBodyProperties`（8 个 `ulong`，把脸型的全部静态特征位打包在 key 里）。

它同时扮演两个角色：**输入格式**（从 XML 节点或 `<BodyProperties .../>` 字符串解析进来）和**输出格式**（`ToString()` 拼回 `version="4"` 的 XML 串）。`ToString()` 的格式必须和 `FromString` / `FromXmlNode` 认识的一致——这是它能往返的前提。

`ClampForMultiplayer()` 是给联机同步用的清洗：把年龄夹到 22–128，**并把 weight/build 硬重置为 0.5/0.5**（不保留原值），同时对脸型 key 做位级修正（把第 19 位起的 6 bit 高度乘数若不在 0.25–0.75 区间就强写 0.5）。它返回一个**新结构体**，原值不变。

## 心智模型

四个典型场景，按调用顺序：

1. **解析**。角色/单位定义里的 `body_properties` 属性是一段 XML 串：`BodyProperties.FromString(text, out bp)`。它先看前缀是不是 `<BodyProperties ` 或 `<BodyPropertiesMax `，是就 `XmlDocument.LoadXml`。注意它会**重解析一遍 age/weight/build 并覆盖**——第一次 `FromXmlNode` 用了默认值 30/0.5/0.5，第二次用硬编码 20/0/0，两次结果以后者为准。
2. **默认**。`BodyProperties.Default` 是 20 岁、0 体重、0 体型 + `default(StaticBodyProperties)`。**它每次 get 都 new 一个新结构体**。
3. **随机生成**。`GetRandomBodyProperties(...)` 直接转发 `FaceGen.GetRandomBodyProperties`，返回区间由 `bodyPropertiesMin` / `bodyPropertiesMax` 界定。`variationAmount` 先被 `MathF.Max(variationAmount, 0f)` 夹过。
4. **序列化**。`ToString()` 拼出可写回 XML 的串。

**最坑的一条是 `FromString` 的双次解析**：它对同一个 `age`/`weight`/`build` 读了两次，第二次用不同的默认值（20/0/0）覆盖第一次（30/0.5/0.5）。这意味着 **`FromString` 的结果和直接 `FromXmlNode` 的结果在属性缺失时不同**。想避免这个行为就用 `FromXmlNode`。

第二条：**结构体的 `default(BodyProperties)` 是「全零」而不是「无效」**。`FromString` 失败时把 `out bodyProperties` 设成 `default` 并返回 false——`Age` 是 0、静态 key 全 0。这是**一个合法可用的值**（0 岁的角色），不是 null。所以判失败必须看返回值，不能看值本身。

第三条：`operator ==` 的实现是 `a == b || (a != null && b != null && ...)` —— 对**值类型**来说 `a != null` 恒为 true（编译器会警告但语义如此），所以它实际退化成比较两个字段。而 `Equals(object obj)` 走的是 `EqualityComparer<T>.Default` 逐字段比较。两套路径在实践中等价，但 `Equals` 对非 `BodyProperties` 的 `obj` 返回 false，而 `operator ==` 的 `a != null` 判断对装箱后的引用是另一回事。**统一用 `Equals` 或直接 `==`**，别混。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public BodyProperties(DynamicBodyProperties dynamicBodyProperties, StaticBodyProperties staticBodyProperties)` | 唯一构造器，直接赋两个 `readonly` 字段。**不校验、不夹取范围**。传 `default` 也能构造。 |
| `StaticProperties` | `public StaticBodyProperties StaticProperties { get; }` | 静态脸型 key 包的只读访问（8 个 `ulong`）。 |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties { get; }` | 动态参数只读访问（年龄/体重/体型）。 |
| `Age` | `public float Age { get; }` | 转发 `_dynamicBodyProperties` 的年龄，单位是「岁」。可超过 100（游戏里很常见），`ClampForMultiplayer` 才夹到 128。 |
| `Weight` | `public float Weight { get; }` | 转发体重参数。**不是千克，是 0–1 量级的归一化值**（默认 0.5）。 |
| `Build` | `public float Build { get; }` | 转发体型参数，同样是 0–1 归一化值。 |
| `KeyPart1` … `KeyPart8` | `public ulong KeyPart1 { get; }` … `KeyPart8` | 分别转发 `StaticProperties` 的 8 个 `ulong` key 分片。**它们是位打包的原始表示**，直接读写会破坏脸型不变量——`ClampForMultiplayer` 内部就是用 `SetBits` / `GetBitsValueFromKey` 在这些位段上做手术的。 |
| `Default` | `public static BodyProperties Default { get; }` | `new BodyProperties(new DynamicBodyProperties(20f, 0f, 0f), default(StaticBodyProperties))`。**每次访问都新建结构体**（值类型无所谓引用开销），但注意它是 20/0/0 而不是 `FromXmlNode` 的 30/0.5/0.5 默认值——**两个默认值来源不同**。 |
| `FromXmlNode` | `public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)` | 从 XML 节点解析。`age` / `weight` / `build` 属性缺失时用 **30f / 0.5f / 0.5f**。静态部分转发 `StaticBodyProperties.FromXmlNode`，它失败则 `out` 置 `default` 并返回 false。**单个属性解析失败用 `float.TryParse` 且忽略结果——写错格式会静默落回默认值。** |
| `FromString` | `public static bool FromString(string keyValue, out BodyProperties bodyProperties)` | 从 `<BodyProperties .../>` / `<BodyPropertiesMax .../>` 串解析。**会 LoadXml 两次逻辑**：先 `FromXmlNode`（用 30/0.5/0.5），再用硬编码的 **20f / 0f / 0f** 重新构造 `DynamicBodyProperties` 覆盖。`LoadXml` 抛 `XmlException` 时被 catch，返回 false 且 `out` 为 `default`。前缀不匹配时走 `Debug.FailedAssert("unknown body properties format:...")` 并返回 false。 |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)` | 先 `MathF.Max(variationAmount, 0f)`，然后转发 `FaceGen.GetRandomBodyProperties(...)`。**真正的生成逻辑在 native 侧的 `FaceGen` 里，托管层只是薄封装。** `race` / `hairCoverType` / `*Tags` 直接透传，不校验。 |
| `ClampForMultiplayer` | `public BodyProperties ClampForMultiplayer()` | 返回**新**结构体：年龄 `MathF.Clamp(Age, 22f, 128f)`，体重与体型**直接重置为 0.5f/0.5f**（原值丢弃），静态部分走 `ClampHeightMultiplierFaceKey` 把高度乘数位段（起始位 19、宽度 6）夹进 0.25–0.75，越界则强写 0.5。**不可逆：原始体型信息丢失。** |
| `ToString` | `public override string ToString()` | 拼出 `<BodyProperties version="4" {DynamicProperties} {StaticProperties} />`。用 `MBStringBuilder(150, "ToString")`。输出的串**可以被 `FromString` 读回**。 |
| `Equals` | `public override bool Equals(object obj)` | `obj is BodyProperties` 为假直接返回 false；否则逐字段 `EqualityComparer<T>.Default.Equals` 比较两个子结构。 |
| `GetHashCode` | `public override int GetHashCode()` | `(2041866711 * -1521134295 + EqualityComparer<DynamicBodyProperties>.Default.GetHashCode(_dynamicBodyProperties)) * -1521134295 + EqualityComparer<StaticBodyProperties>.Default.GetHashCode(_staticBodyProperties)`。**与 `Equals` 配套，可安全用作字典键。** |
| `operator ==` | `public static bool operator ==(BodyProperties a, BodyProperties b)` | `a == b || (a != null && b != null && a._staticBodyProperties == b._staticBodyProperties && a._dynamicBodyProperties == b._dynamicBodyProperties)`。对值类型 `a != null` 恒真，实际等价于两字段比较。 |
| `operator !=` | `public static bool operator !=(BodyProperties a, BodyProperties b)` | `!(a == b)`。 |

## 怎么用

### 怎么拿到它

`BodyProperties` 是 `public struct BodyProperties`（`TaleWorlds.Core/BodyProperties.cs:12`）——**结构体，不是类**。它把外观数据拆成两半：`public StaticBodyProperties StaticProperties`（`:16`，不可变的脸型 key，8 个 `ulong`）和 `public DynamicBodyProperties DynamicProperties`（`:26`，年龄/体重/体型三个 float）。另外直接平铺了 `Age`（`:36`）、`Weight`（`:46`）、`Build`（`:56`）——**这三个是 `DynamicProperties` 的镜像字段，两边要同步改**。

四个来源入口：

- `public static BodyProperties Default`（`:330`）——静态只读默认值。
- `public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)`（`:152`）：`age`/`weight`/`build` 三个属性用 `float.TryParse` 读、**读不到就保留 30f / 0.5f / 0.5f 的初值**（`:153-155`），脸型走 `StaticBodyProperties.FromXmlNode`，后者失败则整体 `bodyProperties = default(BodyProperties)` 并 `return false`（`:172-176`）。
- `public static bool FromString(string keyValue, out BodyProperties bodyProperties)`（`:181`）：要求字符串以 `<BodyProperties ` 或 `<BodyPropertiesMax ` 开头（`:182`），内部 `LoadXml`，`XmlException` 时 `return false`（`:188-191`）。
- `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, ...)`（`:225`）。

### 典型用法

```csharp
using TaleWorlds.Core;
using System.Xml;

// 从角色 XML 读；失败时 out 参数是 default(BodyProperties)，不是 null
BodyProperties bp;
XmlNode node = doc.SelectSingleNode("//NPC");
if (BodyProperties.FromXmlNode(node, out bp))                  // BodyProperties.cs:152
{
    bp.DynamicProperties.Age = 31f;
    // 同步平铺字段，否则两边不一致
    bp.Age = 31f;                                            // :36
    bp.Weight = 0.62f;                                        // :46
    bp.Build = 0.55f;                                         // :56

    // 结构体默认值可取
    BodyProperties fallback = BodyProperties.Default;         // :330
}

// 从字符串（存档 / mod 通信）读
BodyProperties fromText;
bool ok = BodyProperties.FromString("<BodyProperties age=\"28\" weight=\"0.5\" build=\"0.5\" />", out fromText);  // :181

// 随机生成一个体型区间内的人
BodyProperties rnd = BodyProperties.GetRandomBodyProperties(race, isFemale, min, max, hairCoverType);   // :225

// 比较用重载的 ==，它比的是全部字段
if (bp == fallback) { /* ... */ }                             // :232
```

### 最容易踩的坑

**只改了 `DynamicProperties` 里的值，忘了外面那三个平铺字段。** `BodyProperties` 同时暴露 `DynamicProperties.Age`（`DynamicBodyProperties.cs:70`）和顶层的 `BodyProperties.Age`（`BodyProperties.cs:36`），它们是两份独立的存储。`GetRandomBodyProperties`（`:225`）内部会把两者一起填好，但**你手写赋值时不会自动同步**。后果是下游按顶层字段读的那条路径（网格选择、年龄相关的骨骼缩放）看到的是旧值，而按 `DynamicProperties` 读的那条看到新值——同一个人物在不同系统里表现出两个年龄，典型现象是「脸变了但体型没变」。要么两处都写，要么只从 `DynamicProperties` 复制一份出来用。

第二个坑是 `FromXmlNode` 失败时**不抛异常**：`StaticBodyProperties.FromXmlNode` 失败会走 `bodyProperties = default(BodyProperties); return false;`（`:172-176`），于是 `bp` 的静态部分全是 `default`，也就是 `KeyPart1..KeyPart8` 全 0。直接拿它去渲染会得到「没有脸的模型」而不是错误。所有 `From*` 都返回 `bool`，务必检查返回值再使用 `out` 参数。

## 真实示例

从 XML 定义解析（注意返回值才代表成功，`default` 是合法值）：

```csharp
BodyProperties bodyProperties;
bool ok = BodyProperties.FromXmlNode(node, out bodyProperties);
if (!ok)
{
    Debug.Print("body properties parse failed, using default", 0);
    bodyProperties = BodyProperties.Default;
}

float age = bodyProperties.Age;
float build = bodyProperties.Build;
Debug.Print("age " + age + " build " + build, 0);
```

在区间内随机生成（最常见的 NPC 体型生成路径）：

```csharp
BodyProperties min = BodyProperties.Default;
BodyProperties max = BodyProperties.Default;

BodyProperties random = BodyProperties.GetRandomBodyProperties(
    race: 0,
    isFemale: false,
    bodyPropertiesMin: min,
    bodyPropertiesMax: max,
    hairCoverType: 0,
    seed: 12345,
    hairTags: "hair_black",
    beardTags: "",
    tattooTags: "",
    variationAmount: 0.5f);

string serialized = random.ToString();
Debug.Print(serialized, 0);
```

联机同步前的清洗（**原值会被 weight/build 覆盖，不可逆**）：

```csharp
BodyProperties local = BodyProperties.Default;
BodyProperties synced = local.ClampForMultiplayer();

if (local == synced)
{
    Debug.Print("already in sync-safe range", 0);
}

BodyProperties probe;
bool parsed = BodyProperties.FromString(synced.ToString(), out probe);
Debug.Print("round-trip ok: " + parsed, 0);
```

## 风险与边界

- **`default(BodyProperties)` 是合法值不是 null。** 解析失败时 `out` 被设为全零（0 岁）。**判失败必须看 bool 返回值。**
- **`FromString` 内部解析两遍且默认值不同**（30/0.5/0.5 → 20/0/0）。想避开这个不一致就用 `FromXmlNode`。
- **`FromXmlNode` 的单属性解析失败静默落默认。** `float.TryParse` 的返回值被丢弃，`age="abc"` 会得到 30f 而不是报错。
- **`FromString` 的前缀检查是 `StartsWith` + 不变文化忽略大小写。** 传一段不带这两个前缀的文本会触发 `Debug.FailedAssert` 并返回 false——**断言不抛异常**，要查日志。
- **`ClampForMultiplayer` 丢弃 weight/build。** 它把动态参数重置成 0.5/0.5，不保留原值。只想夹年龄不要动体型就别用它。
- **结构体不可变。** `Age` / `Weight` / `Build` / `KeyPartN` 全是只读属性。要改必须 `new BodyProperties(new DynamicBodyProperties(...), modifiedStatic)`。`StaticBodyProperties` 的位段修改要用它自己的位运算 API，不要直接塞 `KeyPartN`。
- **`KeyPart1..8` 是原始位。** 直接按语义理解它们会错——位段含义由 `StaticBodyProperties` 的 `GetBitsValueFromKey` / `SetBits` 定义（`ClampForMultiplayer` 用的是起始位 19、宽度 6 的高度乘数）。
- **`GetRandomBodyProperties` 的实现在 native。** 托管层只是转发 `FaceGen.GetRandomBodyProperties`，参数语义（`race` 取值范围、`hairCoverType` 含义）由 native 决定，源码里查不到校验。
- **native 边界。** `FaceGen` 与 `BodyPropertiesJsonConverter` 都跨到非托管侧。专服/无图形环境下不要指望它们可用。
- **`ToString()` 格式与解析器强耦合。** `version="4"` 这个字面量写死在 `ToString` 里；`FromString` **不检查 version 字段**。手改 XML 加了别的 version 它照样解析。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/BodyProperties.cs` 逐行比对，**public 表面完全一致**：构造器、`StaticProperties` / `DynamicProperties` / `Age` / `Weight` / `Build`、8 个 `KeyPartN`、`Default`、`FromXmlNode` / `FromString` / `GetRandomBodyProperties` / `ClampForMultiplayer`、`ToString` / `Equals` / `GetHashCode` 和两个运算符全都没变；`ToString()` 里写死的仍是 `version="4"`，`ClampForMultiplayer` 的年龄区间仍是 22–128、weight/build 仍重置为 0.5/0.5。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BodyProperties.cs`（220 行）与 `bannerlord-1.4.6/TaleWorlds.Core/BodyProperties.cs`（354 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 22 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 只有 220 行而 1.4.6 有 354 行，这个**近一倍的行数差全部是反编译形态**（1.4.5 是原始源码，1.4.6 是反编译产物），不代表 1.4.6 逻辑变复杂了。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 子结构：[DynamicBodyProperties](../DynamicBodyProperties)（年龄/体重/体型）与 [StaticBodyProperties](../StaticBodyProperties)（8 个 ulong 脸型 key + 位运算 API）
- 底层生成：[FaceGen](../FaceGen) 的 `GetRandomBodyProperties(...)` 是 native 侧实现，本类的 `GetRandomBodyProperties` 只是薄封装
- 序列化：[BodyPropertiesJsonConverter](../BodyPropertiesJsonConverter) 让它能进 JSON，存档与网络同步都靠这条
- 使用者：角色/单位的体型数据由 [ItemObject](../ItemObject) 的 `BodyName` / `RecalculateBody` 之类字段间接引用，装备走 [Equipment](../Equipment) 的 12 槽容器
- 桶首页：[core-extra API 分区](../)
