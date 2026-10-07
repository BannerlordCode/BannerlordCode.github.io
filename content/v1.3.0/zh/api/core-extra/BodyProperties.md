---
title: "BodyProperties"
description: "角色外观的不可变值类型：DynamicBodyProperties 三个 float（年龄/体重/体型）+ StaticBodyProperties 八个 ulong（512 位脸型键），三处默认值互相不一致是本页最大的坑。"
---

# BodyProperties

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct BodyProperties`
**Base:** 无（值类型，仅隐式 `System.ValueType`；标注 `[Serializable]` 与 `[JsonConverter(typeof(BodyPropertiesJsonConverter))]`）
**File:** `TaleWorlds.Core/BodyProperties.cs`（全文 353 行，12136 字节）

## 概述

`BodyProperties` 是一个**不可变值类型**，把角色外观拆成两半：

**`DynamicBodyProperties`** —— 三个 `float`：`Age` / `Weight` / `Build`。这三个是可以连续插值的「体型维度」，游戏里捏人界面拖动的就是它们。

**`StaticBodyProperties`** —— 八个 `ulong`：`KeyPart1` 到 `KeyPart8`。合起来是 **512 位**的脸型键（8 × 64），编码了骨骼比例、脸型参数这些**离散化的**特征。之所以拆成八个而不是一个 `byte[]`，是因为 `ulong` 数组能被存档系统直接序列化。

所以本类自己只有两个 private readonly 字段，然后**把两边各开几个转发属性**：`Age` / `Weight` / `Build` 转发到动态部分，`KeyPart1` 到 `KeyPart8` 转发到静态部分，另外两个 `StaticProperties` / `DynamicProperties` 直接把内部结构整个交出去。

**它是值类型，而且是 JSON 序列化的目标**：`[JsonConverter(typeof(BodyPropertiesJsonConverter))]` 让 Newtonsoft 走 `ToString()` / `FromString()` 这对文本往返。而 `ToString()` 产出的正是那种可以塞进 XML 的字面量：

```csharp
mbstringBuilder.Append<string>("<BodyProperties version=\"4\" ");
mbstringBuilder.Append<string>(this._dynamicBodyProperties.ToString() + " ");
mbstringBuilder.Append<string>(this._staticBodyProperties.ToString());
mbstringBuilder.Append<string>(" />");
```

所以「存档里的脸型长什么样」这个问题，答案就是这个 `version="4"` 的 XML 文本。

## 心智模型

**把它想成「一段可往返的文本所代表的外观值」，而不是「一个可以逐字段改的对象」。** 两个字段都是 `readonly`，没有一条 setter。改外观只有三条路：重新构造、乘算钳制（`ClampForMultiplayer`）、或者走文本往返（`FromString` / `FromXmlNode`）。

**第一步，理解 `KeyPart` 的位数划分。** `SetBits(ipart7, startBit, numBits, inewValue)` 与 `GetBitsValueFromKey(part, startBit, numBits)` 是一对位操作工具：

```csharp
private static ulong SetBits(in ulong ipart7, int startBit, int numBits, int inewValue)
{
    ulong num = ipart7;
    ulong num2 = MathF.PowTwo64(numBits) - 1UL << startBit;
    return (num & ~num2) | (ulong)((ulong)((long)inewValue) << startBit);
}
```

这里的 `MathF.PowTwo64` 在 `TaleWorlds.Library/MathF.cs:95` 的实现是 `return 1UL << x;`——**名字看着像浮点函数，实际是精确的 64 位移位，没有任何精度损失**。所以这两个方法精确互逆。

`ClampHeightMultiplierFaceKey` 用的是 `GetBitsValueFromKey(keyPart, 19, 6)` —— 即 **`KeyPart8` 的第 19 到 24 位**存着「身高乘数」，取值范围 0–63。超过 `[0.25, 0.75]`（即原始值不在 16–47 之间）就被强行拉回中间值 0.5。这解释了 `KeyPart` 为什么是按位段设计的：**脸型是打包过的位域，不是独立的浮点数**。

**第二步，理解三处默认值互不相同——这是本页最容易出事的地方。**

| 来源 | age | weight | build |
| --- | --- | --- | --- |
| `Default` 静态属性 | **20** | **0** | **0** |
| `FromXmlNode` | **30** | **0.5** | **0.5** |
| `FromString` | **20** | **0** | **0** |

`Default` 的实现是 `new BodyProperties(new DynamicBodyProperties(20f, 0f, 0f), default(StaticBodyProperties))`；`FromXmlNode` 开头是 `float age = 30f; float weight = 0.5f; float build = 0.5f;`。类底部三个 `private const` 是 `DefaultAge = 30f` / `DefaultWeight = 0.5f` / `DefaultBuild = 0.5f`——**与 `Default` 属性里的 20/0/0 矛盾**。也就是说源码里存在两套「默认」数字，`Default` 属性用的是 20/0/0，私有常量用 30/0.5/0.5。**别把 `Default` 属性和 `Default*` 常量当成同一个东西。**

**第三步，理解 `FromString` 里那处真实的失败模式。** 它先调 `BodyProperties.FromXmlNode(...)` 但**丢弃了返回值**：

```csharp
BodyProperties.FromXmlNode(xmlDocument.FirstChild, out bodyProperties);
float age = 20f; float weight = 0f; float build = 0f;
...
bodyProperties = new BodyProperties(new DynamicBodyProperties(age, weight, build), bodyProperties.StaticProperties);
return true;
```

`FromXmlNode` 失败时会把 `bodyProperties` 置为 `default(BodyProperties)`，于是 `bodyProperties.StaticProperties` 拿到的是全零的静态部分——**而 `FromString` 照样返回 `true`**。所以「静态脸型解析失败」这条信息在这一层被彻底吞掉，调用方拿到的是一个「结构合法但脸型全零」的值。[BodyPropertiesJsonConverter](../BodyPropertiesJsonConverter) 的 `ReadJson` 走的正是这条路，它连 `FromString` 的返回值都不检查。

**第四步，理解 `operator ==` 的形态。** 反编译出来是这样：

```csharp
public static bool operator ==(BodyProperties a, BodyProperties b)
{
    return a == b || (a != null && b != null && a._staticBodyProperties == b._staticBodyProperties && a._dynamicBodyProperties == b._dynamicBodyProperties);
}
```

**`a != null` 对一个 struct 来说无法编译**——没有从 `null` 到 `BodyProperties` 的隐式转换。所以这两处 null 检查是**反编译器产物**，不是源码里的真代码；真实语义就是后半段的两个字段逐值比较。同样的形态在 [DynamicBodyProperties](../DynamicBodyProperties) 上也有——两个 struct 各有一份，是同一个反编译问题的两次出现。**读这份反编译源码时不要把这两段 null 检查当回事。**

**第五步，理解 `ClampForMultiplayer` 的意图而非字面。** 它做三件事：把年龄 `MathF.Clamp` 到 `[22, 128]`，把体重体型**硬重置成 `0.5 / 0.5`**（直接丢掉了原值），然后调 `ClampHeightMultiplierFaceKey` 把 512 位脸型里的身高乘数拉回中位。反编译出的 `ClampHeightMultiplierFaceKey` 体内有一串 `staticBodyProperties2 = staticBodyProperties;` 的自赋值（明显的反编译退化），**不要照着那份代码推演结果**；可依赖的只有 `GetBitsValueFromKey(KeyPart8, 19, 6) / 63f` 那个判据本身。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `StaticProperties` | `public StaticBodyProperties StaticProperties { get; }` | 直接交出整个静态部分（八个 `ulong`）。要整体传给 [FaceGen](../FaceGen) 时用它。 |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties { get; }` | 直接交出动态部分（`Age` / `Weight` / `Build` 三个 `float`）。 |
| `Age` | `public float Age { get; }` | 转发 `this._dynamicBodyProperties.Age`。 |
| `Weight` | `public float Weight { get; }` | 转发 `this._dynamicBodyProperties.Weight`。 |
| `Build` | `public float Build { get; }` | 转发 `this._dynamicBodyProperties.Build`。 |
| `KeyPart1`–`KeyPart8` | `public ulong KeyPart1 { get; }` … `KeyPart8` | 八个转发属性，合起来 512 位脸型键。`KeyPart8` 的第 19–24 位是身高乘数（6 位，范围 0–63）。 |
| 构造 | `public BodyProperties(DynamicBodyProperties dynamicBodyProperties, StaticBodyProperties staticBodyProperties)` | 唯一构造器，两个参数都必给。字段 `readonly`。 |
| `Default` | `public static BodyProperties Default { get; }` | **每次访问都 `new` 一个新实例**。值是 age 20 / weight 0 / build 0，静态部分全零。与私有 `Default*` 常量（30/0.5/0.5）**不一致**。 |
| `FromXmlNode` | `public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)` | 读 `age` / `weight` / `build`（默认 30/0.5/0.5），再转给 `StaticBodyProperties.FromXmlNode`。后者失败则整体 `default` 并返回 `false`。 |
| `FromString` | `public static bool FromString(string keyValue, out BodyProperties bodyProperties)` | 只认以 `<BodyProperties ` 或 `<BodyPropertiesMax ` 开头的字符串。**`XmlDocument.LoadXml` 抛 `XmlException` 时捕获、返回 `false`**；识别不出格式则走 `Debug.FailedAssert` 并返回 `false`。**`FromXmlNode` 失败它不感知，仍返回 `true`。** |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)` | 十参数转发给 `FaceGen.GetRandomBodyProperties(...)`，只在开头做了一次 `variationAmount = MathF.Max(variationAmount, 0f)`。**本类不含任何随机逻辑。** |
| `ToString` | `public override string ToString()` | 产出 `<BodyProperties version="4" age=".." weight=".." build=".." ... />`。用 `MBStringBuilder`，初始容量 150。 |
| `Equals` | `public override bool Equals(object obj)` | `obj is BodyProperties` 后用 `EqualityComparer<T>.Default` 比较两个内部结构。 |
| `GetHashCode` | `public override int GetHashCode()` | `(2041866711 * -1521134295 + dynamicHash) * -1521134295 + staticHash`。两个魔数，来自编译器生成的值类型哈希模板。 |
| `operator ==` | `public static bool operator ==(BodyProperties a, BodyProperties b)` | 逐值比较两个内部结构。反编译产物里那两处 `a != null` **编译不过**，是反编译器加的，别当真。 |
| `operator !=` | `public static bool operator !=(BodyProperties a, BodyProperties b)` | `!(a == b)`。 |
| `ClampForMultiplayer` | `public BodyProperties ClampForMultiplayer()` | 年龄钳到 `[22, 128]`，体重体型**重置为 `0.5 / 0.5`**，静态部分走身高乘数钳制。**有副作用式的信息丢失**：原 weight/build 没了。 |

| 私有辅助 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ClampHeightMultiplierFaceKey` | `private StaticBodyProperties ClampHeightMultiplierFaceKey(in StaticBodyProperties staticBodyProperties)` | 读 `KeyPart8` 第 19–24 位（身高乘数），不在 `[0.25, 0.75]` 就重写为 0.5。反编译产物里有退化代码，**按意图而非字面理解**。 |
| `SetBits` | `private static ulong SetBits(in ulong ipart7, int startBit, int numBits, int inewValue)` | 在 `ulong` 的 `[startBit, startBit+numBits)` 位段写入 `inewValue`。掩码用 `MathF.PowTwo64(numBits) - 1UL << startBit`。 |
| `GetBitsValueFromKey` | `private static int GetBitsValueFromKey(in ulong part, int startBit, int numBits)` | 读 `part` 的 `[startBit, startBit+numBits)` 位段，转成 `int`。 |
| `_dynamicBodyProperties` | `private readonly DynamicBodyProperties` | 三个 float 的持有者。 |
| `_staticBodyProperties` | `private readonly StaticBodyProperties` | 八个 ulong 的持有者。 |
| `DefaultAge` / `DefaultWeight` / `DefaultBuild` | `private const float` = 30f / 0.5f / 0.5f | **与 `Default` 属性的 20/0/0 不一致**。只被 `FromXmlNode` 的局部变量同值使用。 |

## 真实示例

官方调用 `GetRandomBodyProperties` 的标准形态，[DefaultHeroCreationModel](../../campaign/DefaultHeroCreationModel) 那边是典型：

```csharp
using TaleWorlds.Core;

// DefaultHeroCreationModel.cs:167 的形态：给一对父母 + 一个种子，让引擎生成孩子的外观。
BodyProperties randomBodyProperties = BodyProperties.GetRandomBodyProperties(
    hero.Mother.CharacterObject.Race,
    hero.IsFemale,
    bodyProperties,     // bodyPropertiesMin
    bodyProperties2,    // bodyPropertiesMax
    1,                  // hairCoverType
    seed,
    hairTags,
    beardTags,
    tattooTags,
    variationAmount);
```

**注意 `min` 和 `max` 是两个 `BodyProperties` 而不是两个 `float`** —— 生成范围是「两个完整外观之间插值」，所以脸型位域也在插值范围内。第十个参数 `variationAmount` 会被 `MathF.Max(variationAmount, 0f)` 兜一次，传负数等于传 0。

只想拿脸型（不要体型），官方是这么写的 —— `DefaultHeroCreationModel.cs:199`：

```csharp
using TaleWorlds.Core;

// 只取 StaticProperties，丢掉动态部分。
StaticBodyProperties faceOnly = BodyProperties.GetRandomBodyProperties(
    originalCharacter.Race,
    originalCharacter.IsFemale,
    originalCharacter.GetBodyPropertiesMin(true),
    originalCharacter.GetBodyPropertiesMax(true),
    0,
    MBRandom.RandomInt(),
    originalCharacter.BodyPropertyRange.HairTags,
    originalCharacter.BodyPropertyRange.BeardTags,
    originalCharacter.BodyPropertyRange.TattooTags,
    0f).StaticProperties;
```

这就是 `StaticProperties` 这个转发属性的用途：**你不需要拆开八个 `KeyPart`，整个静态部分就是一个值**。

走 JSON / 存档往返时，先 `ToString` 再 `FromString`：

```csharp
using TaleWorlds.Core;

public static BodyProperties RoundTrip(BodyProperties original)
{
    string serialized = original.ToString();
    BodyProperties parsed;

    // 必须判返回值 —— FromXmlNode 失败时 FromString 仍返回 true。
    bool ok = BodyProperties.FromString(serialized, out parsed);

    // 更稳的写法是自己确认内容没被清空：
    bool staticIntact = parsed.KeyPart1 == original.KeyPart1
        && parsed.KeyPart8 == original.KeyPart8
        && parsed.Age == original.Age;

    MBDebug.Print("ok=" + ok + " staticIntact=" + staticIntact);
    return parsed;
}
```

`TextObject.GetEmpty()` 只是让它编译得过，实际用不到；关键是那句 `bool ok = ...` 必须存在。**`FromString` 的 `true` 不代表脸型解析成功**——这是 5.3 节说的那个吞错点。

捏人界面的钳制，以及为什么不能拿它当通用钳制：

```csharp
using TaleWorlds.Core;

public static BodyProperties SanitizeForMultiplayer(BodyProperties original)
{
    BodyProperties clamped = original.ClampForMultiplayer();

    // 年龄被钳到 [22, 128]。
    float age = clamped.Age;

    // 但 weight / build 被无条件重置成 0.5 / 0.5 —— 原值丢失，不可恢复。
    float weight = clamped.Weight;
    float build = clamped.Build;

    MBDebug.Print("age " + original.Age + " -> " + age
        + ", weight " + original.Weight + " -> " + weight
        + ", build " + original.Build + " -> " + build);
    return clamped;
}
```

如果只是想把年龄钳一下而保留体型，`ClampForMultiplayer` 是错的工具——自己用 `DynamicBodyProperties` 重构造：

```csharp
using TaleWorlds.Core;

public static BodyProperties ClampAgeOnly(BodyProperties original, float minAge, float maxAge)
{
    float age = Math.Clamp(original.Age, minAge, maxAge);
    // 保留原 weight / build，只动 age。
    return new BodyProperties(
        new DynamicBodyProperties(age, original.Weight, original.Build),
        original.StaticProperties);
}
```

## 风险与边界

- **三处默认值不一致。** `Default` 是 20/0/0，`FromXmlNode` 是 30/0.5/0.5，私有常量 `DefaultAge`/`DefaultWeight`/`DefaultBuild` 也是 30/0.5/0.5。**「默认外观」在不同代码路径下不是同一个东西。**
- **`FromString` 吞掉静态部分的解析失败。** 它丢弃 `FromXmlNode` 的返回值，解析失败时拿到全零 `StaticProperties`，**却仍返回 `true`**。[BodyPropertiesJsonConverter](../BodyPropertiesJsonConverter) 的 `ReadJson` 连这个 `true` 都不检查。脸型「莫名其妙变默认」的问题要从这里查。
- **`FromString` 只认两种前缀。** `<BodyProperties ` 或 `<BodyPropertiesMax `，大小写不敏感（`StringComparison.InvariantCultureIgnoreCase`）。其它格式走 `Debug.FailedAssert`。**注意 `StartsWith` 后面那个空格**——`<BodyProperties>`（无属性）不匹配。
- **`operator ==` 里那两处 `a != null` 是反编译产物。** 结构体无法与 `null` 比较。**不要基于它们推断真实语义**，真实语义就是两个字段逐值比较。[DynamicBodyProperties](../DynamicBodyProperties) 上有同一现象。
- **`ClampForMultiplayer` 会丢弃 weight / build。** 无条件重置成 `0.5 / 0.5`。想只钳年龄请自己用 `DynamicBodyProperties` 重构造。
- **`ClampHeightMultiplierFaceKey` 的反编译代码不可信。** 体内有自赋值退化语句。只能依赖 `GetBitsValueFromKey(KeyPart8, 19, 6) / 63f` 这个判据，不要照抄字面。
- **`Default` 属性每次访问都新建。** 它不是缓存的常量。`Default.KeyPart1 == Default.KeyPart1` 为 `true`（值相等），但 `ReferenceEquals` 对 struct 本来就无意义——struct 复制即复制。
- **`ToString()` 用 `MBStringBuilder` 且初始容量 150。** 极端长的脸型串可能触发扩容。
- **`version="4"` 是硬编码的。** `ToString` 里写死字符串 `"<BodyProperties version=\"4\" "`。**`FromString` 完全不检查这个 version 值**——它只看根节点名字。所以旧版格式的字符串会被当成新版解析，`StaticBodyProperties.FromXmlNode` 里遇到不认识的属性时行为取决于那边。
- **`GetRandomBodyProperties` 自己不含随机逻辑。** 它只 `MathF.Max(variationAmount, 0f)` 然后转发 [FaceGen](../FaceGen)。要改随机行为得改 `FaceGen` 那边。
- **`SetBits` / `GetBitsValueFromKey` 是精确的位运算。** `MathF.PowTwo64(int x)` 在 `TaleWorlds.Library/MathF.cs:95` 的实现就是 `return 1UL << x;`——名字里的「MathF」和「Float」有误导性，**它没有任何浮点误差**。所以 `SetBits(part, 19, 6, v)` 与 `GetBitsValueFromKey(part, 19, 6)` 精确互逆，没有精度担忧。唯一的边界是 `x >= 64` 时 C# 的移位会按取低 6 位处理。
- **struct 无引用相等。** 放进 `Dictionary` / `HashSet` 依赖 `Equals` + `GetHashCode`，两者都基于值。**512 位脸型参与哈希，性能上要留意**——`GetHashCode` 每次都要算 `StaticBodyProperties` 的哈希。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/BodyProperties.cs:12`，值类型，唯一构造函数是 `BodyProperties(DynamicBodyProperties dynamicBodyProperties, StaticBodyProperties staticBodyProperties)`（`BodyProperties.cs:145`），方法体只是把两个字段赋一遍。**所以要造它，你必须先造两个半结构体** —— 这就是它与其他向量类最大的不同：`new BodyProperties(age, weight, build)` 这种写法不存在。

三条真实入口：

- **读英雄的现成外观**：`Hero.BodyProperties`（`TaleWorlds.CampaignSystem/Hero.cs:443`）的 getter 就是 `return new BodyProperties(new DynamicBodyProperties(this.Age, this.Weight, this.Build), this.StaticBodyProperties);` —— 每次访问都 new 一个结构体出来，改它不影响英雄本体。
- **从 XML 节点解析**：`FromXmlNode(XmlNode node, out BodyProperties bodyProperties)`（`BodyProperties.cs:152`），内部先用局部默认值 `age=30f / weight=0.5f / build=0.5f` 再尝试覆盖。
- **自己造动态部分**：`new DynamicBodyProperties(age, weight, build)`（`TaleWorlds.Core/DynamicBodyProperties.cs:11`），静态部分用 `default(StaticBodyProperties)`。

**一段可直接跑的三行覆盖年龄**（形态取自 `TaleWorlds.CampaignSystem/HeroCreator.cs:392` 的引擎写法）：

```csharp
BodyProperties bp = new BodyProperties(new DynamicBodyProperties(6f, hero.Weight, hero.Build), hero.StaticBodyProperties);
hero.StaticBodyProperties = bp.StaticProperties;
Debug.Print(bp.DynamicProperties.Age, 0);
```

第一行把 `DynamicBodyProperties` 的三个分量都显式给出，年龄改 6、身高体重沿用英雄本身 —— 这是「只改一个维度」的标准做法，也是 `HeirComingOfAgeFemaleSceneNotificationItem.cs:52` 用的形状。

**赋值方向要注意：只有 `StaticBodyProperties` 能写回英雄。** `Hero.BodyProperties` 是每次现造的新结构体，你改它的 `DynamicProperties` 什么都不会发生；引擎真正持久化的是 `Hero.StaticBodyProperties` 字段。所以上面第三行只是读，而第二行才是「写回去」。

**需要随机外观就走 `GetRandomBodyProperties`。** 它在 `BodyProperties.cs:225`，八个必填参数加一个可选 `variationAmount`：`int race, bool isFemale, BodyProperties min, BodyProperties max, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f`。**`seed` 决定结果**，同 seed 同参数必然同结果。

**最常见的坑：三处默认值不一致。** `Default` 是 20/0/0（`BodyProperties.cs:330` 的 getter 写死了 `new DynamicBodyProperties(20f, 0f, 0f)`），`FromXmlNode` 是 30/0.5/0.5，私有常量 `DefaultAge`/`DefaultWeight`/`DefaultBuild` 也是 30/0.5/0.5。**「默认外观」在不同代码路径下不是同一个东西。** 这条已在「风险与边界」首条展开；就写法而言它的后果是：拿 `BodyProperties.Default` 去当「引擎的默认外观」来对齐 XML 缺失时的结果，会在年龄与体型上产生可见偏差。

## 跨版本提示

`BodyProperties.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵源码树里**public 成员集合完全一致**——两个转发属性（`StaticProperties` / `DynamicProperties`）、三个动态转发（`Age` / `Weight` / `Build`）、八个 `KeyPart`、构造器、`Default`、`FromXmlNode` / `FromString` / `GetRandomBodyProperties` / `ToString` / `Equals` / `GetHashCode` / `ClampForMultiplayer` 与两个运算符，全部相同，没有任何增删。

字节数有轻微差异：1.3.0 是 12136 字节，1.3.15 是 12241 字节，1.4.6 / 1.4.7 / 1.5.3 三者一致为 12109 字节；**行数在五个版本里始终是 353 行**。差异同样来自反编译器排版。

这**不代表外观格式没变**：`ToString()` 里那个 `version="4"` 是写死的字符串，格式版本的变化发生在数据层面而非类型层面。跨版本读旧角色外观时，**风险在 `StaticBodyProperties.FromXmlNode` 与 [FaceGen](../FaceGen) 的解析逻辑上，不在本类的 API 表面**。如果你在跨版本代码里见到新的脸型字段，先去查 [StaticBodyProperties](../StaticBodyProperties) 与 [FaceGen](../FaceGen) 那两页。

## 依赖关系

- 两个组成部分：[DynamicBodyProperties](../DynamicBodyProperties)（三个 `float`，可插值）与 [StaticBodyProperties](../StaticBodyProperties)（八个 `ulong`，512 位脸型键）。本类的全部转发属性最终都指向它们
- 随机生成委托：[FaceGen](../FaceGen) 是 `GetRandomBodyProperties` 的真正实现，本类只做参数兜底
- JSON 往返：[BodyPropertiesJsonConverter](../BodyPropertiesJsonConverter) 通过 `[JsonConverter]` 特性挂在本类型上，`ReadJson` 取 `_data` 字段交给 `FromString` —— **这是 5.3 节那个吞错点的实际入口**
- 调用方：角色的随机外观生成（`CharacterObject.GetBodyPropertiesMin/Max`、[DefaultHeroCreationModel](../../campaign/DefaultHeroCreationModel)、`HeroCreator`、故事模式的人物创建）
- 相等性参照：[DynamicBodyProperties](../DynamicBodyProperties) 上有同一个反编译 null 检查伪影，可对照阅读
- 桶首页：[core-extra API 分区](../)