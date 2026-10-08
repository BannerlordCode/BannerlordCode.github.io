---
title: "DynamicBodyProperties"
description: "角色体型的可变部分：年龄、体重、体型三个 float 的值类型结构体，带默认值常量与逐字段相等比较。"
---
# DynamicBodyProperties

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct DynamicBodyProperties`
**Base:** `System.ValueType`（实现 `IEquatable<DynamicBodyProperties>` 语义但未声明该接口）
**File:** `TaleWorlds.Core/DynamicBodyProperties.cs`

## 概述

它是 `BodyProperties` 的一半：另一半 `StaticBodyProperties` 是 128 位（8 个 `ulong`）不可变的静态特征位包。切分理由很直接——**年龄/体重/体型是玩家与 AI 每局都在变、需要在 UI 里拖动滑条、并且要单独存档同步的少量标量**，塞进 8 个 `ulong` 的位包里既浪费也难改。

结构体只有三个公开字段 `Age` / `Weight` / `Build`，都是 `public` 可写。`[Serializable]`，没有 `[SaveableField]` 标记——它靠宿主 `BodyProperties` 被存档系统整体处理。

两个静态常量锚点：`Default`（20 岁、0.5 体重、0.5 体型）与 `Invalid`（全 0，即 `default`）。两个上限常量：`MaxAge = 128f`、`MaxAgeTeenager = 21f`——**这两个常量只被读，类本身不 clamp 任何输入**。

## 心智模型

它几乎没有生命周期，因为它是纯值。三个使用场景：

1. **构造新角色体型**：`new DynamicBodyProperties(age, weight, build)` 或 `DynamicBodyProperties.Default`；
2. **改一个字段**：`props.Build = 0.7f;`（字段公开可写，不需要任何 API）；
3. **塞回 `BodyProperties`**：作为构造器第一个参数，或直接改 `bodyProperties.Age` / `.Weight` / `.Build`（`BodyProperties` 把这三个字段转发到 `DynamicProperties`）。

**最需要小心的一条是这个结构体的 `operator ==` 与 `Equals` 不是同一条代码路径。** `Equals(DynamicBodyProperties other)` 用 `float.Equals` 逐字段比；`Equals(object obj)` 先 `obj is DynamicBodyProperties` 再转调前者；而 `operator ==` 的方法体第一项就是 `a == b`——**从反编译产物看这是自身调用，正常执行会栈溢出**。同一段代码在 `StaticBodyProperties` 里也有同样的形状。最合理的解释是原始 C# 写的是装箱后的引用比较作为「两边都是默认值」的快路径，而反编译器把它渲染成了自身调用；**这一点无法从反编译产物确证，行为未核实**。

所以实务上的结论很简单：**比较体型用 `Equals`，不要用 `==` / `!=`。** `a.Equals(b)` 是可读、可推断、无歧义的那条路径。

第二条：**它是浮点结构体，没有容差比较。** `0.1f + 0.2f != 0.3f` 这类问题在这里同样成立，`Equals` 逐字段用 `float.Equals`，两个「数学上相等」的浮点组合会被判为不等。**别用它做版本号式的精确相等判断**，除非两端数值来自同一次解析。

第三条：**`Invalid` 是全 0，不是负数哨兵。** `Age = 0 / Weight = 0 / Build = 0` 和一个真写了 0 的合法体型在 `Equals` 眼里完全一样。判「有没有设过体型」要看 `bodyProperties.StaticProperties` 那一半，或者干脆自己维护一个 nullable。

第四条：**三个字段没有任何范围校验。** `Age = -5f`、`Weight = 99f` 照收不误。`MaxAge` / `MaxAgeTeenager` 是给调用方看的参考常量，不是这个结构体会替你执行的门禁。

## 关键成员

### 字段与构造

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Age` | `public float Age;` | 年龄。**公开可写字段**，无校验。上限参考常量是 `MaxAge`。 |
| `Weight` | `public float Weight;` | 体重比例，`0`–`1` 语义但**不校验**。 |
| `Build` | `public float Build;` | 体型比例，同上。 |
| `.ctor` | `public DynamicBodyProperties(float age, float weight, float build)` | 三参数直接赋值，**无默认值、无校验、无 clamp**。 |

### 静态锚点与常量

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Default` | `public static readonly DynamicBodyProperties Default` | `new DynamicBodyProperties(20f, 0.5f, 0.5f)`。**`static readonly` 字段，不是属性**——引用它不会产生新结构体，但直接改它的字段在编译期就不允许（readonly 字段）。 |
| `Invalid` | `public static readonly DynamicBodyProperties Invalid` | `default(DynamicBodyProperties)`，三个字段全 0。**与「真写了 0 的合法体型」在 `Equals` 语义下不可区分。** |
| `MaxAge` | `public const float MaxAge = 128f` | 年龄上限参考值。**类本身不据此 clamp。** |
| `MaxAgeTeenager` | `public const float MaxAgeTeenager = 21f` | 青少年判定阈值参考值，同样只是常量。 |

### 相等与格式化

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Equals(DynamicBodyProperties)` | `public bool Equals(DynamicBodyProperties other)` | `Age.Equals(other.Age) && Weight.Equals(...) && Build.Equals(...)`。**逐字段 `float.Equals`，无容差。** 推荐用这条。 |
| `Equals(object)` | `public override bool Equals(object obj)` | `obj != null && obj is DynamicBodyProperties && this.Equals((DynamicBodyProperties)obj)`。装箱路径。 |
| `GetHashCode` | `public override int GetHashCode()` | `((Age.GetHashCode() * 397) ^ Weight.GetHashCode()) * 397 ^ Build.GetHashCode()`。**与逐字段 `Equals` 一致**，所以当 `Dictionary` / `HashSet` 的键是安全的（前提是别用 `==`）。 |
| `operator ==` / `operator !=` | `public static bool operator ==(DynamicBodyProperties a, DynamicBodyProperties b)` / `operator !=` | **反编译产物里 `==` 的方法体首项就是 `a == b`（自身调用）**；`!=` 是 `!(a == b)`。原始 C# 极可能是「装箱引用比较 + 逐字段比较」的两段式，反编译渲染成了自身调用。**未核实，用 `Equals`。** |
| `ToString` | `public override string ToString()` | 通过 `MBStringBuilder`（`Initialize(150, "ToString")`）输出 `age="20" weight="0.5" build="0.5" `。`age` 用 `"0.##"` 格式（两位小数），`weight` / `build` 用 `"0.####"`（四位）。**末尾带一个空格。** 这个格式正是 `BodyProperties`.ToString 的动态部分。 |

## 怎么用

### 怎么拿到它

`DynamicBodyProperties` 是 `public struct DynamicBodyProperties`（`TaleWorlds.Core/DynamicBodyProperties.cs:8`），全文 85 行，公开面极小：

- 构造器 `public DynamicBodyProperties(float age, float weight, float build)`（`:11`）
- 三个公开字段 `Age`（`:70`）、`Weight`（`:73`）、`Build`（:76）——**是字段不是属性，可以直接赋值**
- 两个静态只读：`public static readonly DynamicBodyProperties Invalid`（`:79`）和 `public static readonly DynamicBodyProperties Default = new DynamicBodyProperties(20f, 0.5f, 0.5f)`（`:82`）
- 两个上限常量：`MaxAge = 128f`（`:64`）、`MaxAgeTeenager = 21f`（`:67`）

它是 `BodyProperties` 的组成部分，只能通过 `BodyProperties.DynamicProperties`（`BodyProperties.cs:26`）拿到，也可以直接从 `BodyProperties.FromXmlNode`（`BodyProperties.cs:152`）里经过。

### 典型用法

```csharp
using TaleWorlds.Core;

// 独立使用：年龄 / 体重 / 体型三分量
var dyn = new DynamicBodyProperties(age: 34f, weight: 0.55f, build: 0.62f);   // DynamicBodyProperties.cs:11
dyn.Age = 35f;                        // 字段，可直接写（:70）

// 默认值：20 岁、中等体重与体型
Debug.Print(DynamicBodyProperties.Default.Age, 0);      // :82 → 20

// 夹上限——常量自己不会自动生效，得你自己比
if (dyn.Age > DynamicBodyProperties.MaxAge) dyn.Age = DynamicBodyProperties.MaxAge;        // :64 → 128
bool isTeen = dyn.Age < DynamicBodyProperties.MaxAgeTeenager;                              // :67 → 21

// 装进 BodyProperties
BodyProperties bp = new BodyProperties(dyn, staticBodyProperties);                          // BodyProperties.cs:145
if (dyn == DynamicBodyProperties.Invalid) { /* 不合法 */ }                                  // :79，重载 == 在 :19
```

### 最容易踩的坑

**以为赋值时年龄会被自动夹到 `MaxAge`，结果做出一个 300 岁的角色。** `MaxAge = 128f`（`:64`）和 `MaxAgeTeenager = 21f`（`:67`）只是两个 `const float`，**构造器（`:11`）和三个公开字段都不做任何校验**。`new DynamicBodyProperties(300f, 1f, 1f)` 完全合法，`dyn.Age = 300f` 也完全合法。下游的骨骼缩放 / 年龄相关 mesh 在这种值下通常不是报错，而是渲染出一个畸形的模型或直接不出模型。**自己写 `Math.Clamp`。**

第二个坑是它和 `BodyProperties` 顶层的镜像字段不同步：`BodyProperties` 同时有 `BodyProperties.Age`（`BodyProperties.cs:36`）和 `BodyProperties.DynamicProperties.Age`（这里是 `:70`），是两份独立存储。改 `DynamicBodyProperties` 的字段**不会**让 `BodyProperties.Age` 跟着变，反之亦然——同一个人的年龄在两条读取路径下可能不一致。

## 真实示例

造一个新角色的体型并改一个字段：

```csharp
DynamicBodyProperties props = new DynamicBodyProperties(32f, 0.55f, 0.5f);
Debug.Print(props.ToString(), 0);

props.Build = 0.75f;
Debug.Print("build now " + props.Build, 0);
```

用默认锚点起步：

```csharp
DynamicBodyProperties props = DynamicBodyProperties.Default;
Debug.Print("age=" + props.Age + " weight=" + props.Weight + " build=" + props.Build, 0);

if (props.Age < DynamicBodyProperties.MaxAgeTeenager)
{
    Debug.Print("teenager model expected", 0);
}
```

塞进 `BodyProperties`（两边都要改时以 `BodyProperties` 为准）：

```csharp
BodyProperties body = new BodyProperties(DynamicBodyProperties.Default, staticProps);

// 改一半：直接改 BodyProperties 的转发字段
body.Age = 41f;
body.Weight = 0.62f;

Debug.Print("dynamic=" + body.DynamicProperties.ToString(), 0);
Debug.Print("static key1=" + body.KeyPart1, 0);
```

逐字段比较（不要用 `==`）：

```csharp
DynamicBodyProperties a = new DynamicBodyProperties(30f, 0.5f, 0.5f);
DynamicBodyProperties b = new DynamicBodyProperties(30f, 0.5f, 0.5f);

Debug.Print("equals=" + a.Equals(b), 0);
Debug.Print("hash same=" + (a.GetHashCode() == b.GetHashCode()), 0);
```

当 `Dictionary` 的键（`Equals` + `GetHashCode` 配套，这是安全用法）：

```csharp
Dictionary<DynamicBodyProperties, string> looks = new Dictionary<DynamicBodyProperties, string>();
looks.Add(new DynamicBodyProperties(25f, 0.5f, 0.5f), "young-average");

DynamicBodyProperties probe = new DynamicBodyProperties(25f, 0.5f, 0.5f);
string label;
if (looks.TryGetValue(probe, out label))
{
    Debug.Print("found " + label, 0);
}
```

区分「没设过」与「设成了默认值」——只能靠 `Invalid` 与外部标记：

```csharp
DynamicBodyProperties unset = DynamicBodyProperties.Invalid;
DynamicBodyProperties explicitZero = new DynamicBodyProperties(0f, 0f, 0f);

Debug.Print("Invalid age=" + unset.Age, 0);
Debug.Print("equals explicit zero: " + unset.Equals(explicitZero), 0);
Debug.Print("=> Invalid 无法与真实 0 值区分，需要自己另带标记", 0);
```

## 风险与边界

- **是结构体，赋值即拷贝。** `var b = a;` 之后改 `b.Build` 不影响 `a`。但它只有值字段，没有引用成员，所以这一点没有陷阱。
- **`operator ==` 的反编译形态可疑。** 方法体首项是自身调用；原始 C# 极可能是装箱比较快路径，但**未核实**。**用 `Equals`，别用 `==`。**
- **没有浮点容差。** `Equals` 逐字段调 `float.Equals`，数学上相等的浮点组合会被判不等。做「是否大致相同」的判断要自己比 `MathF.Abs`。
- **三个字段零校验。** 负年龄、权重 5.0 都照收。`MaxAge` / `MaxAgeTeenager` 是给调用方的参考常量，不是本类执行的 gate。
- **`Invalid` 等于「全是 0 的合法体型」。** 判「有没有设过」不能靠它。
- **`Default` / `Invalid` 是 `static readonly` 字段不是属性。** `Debug.Print(DynamicBodyProperties.Default, 0)` 拿到的是一份结构体拷贝，改它没用。
- **没有自己的存档标记。** 它靠宿主 `BodyProperties` 被整体处理。想单独存这半边，得自己在存档里塞。
- **`ToString()` 末尾带一个空格**（源码里 `Append("\" ")`）。做字符串精确比对时别忘了它。
- **`ToString()` 的位数是固定的。** `age` 两位小数、`weight` / `build` 四位小数，且不随数值大小切换科学计数法。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/DynamicBodyProperties.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/DynamicBodyProperties.cs` 逐行比对，**public 表面完全一致**：15 条 public 成员（三个公开字段 + 构造器 + `Equals` 泛型 / `Equals` object / `GetHashCode` / `ToString` / `operator ==` / `operator !=` + `Default` / `Invalid` 两个 `static readonly` 字段 + `MaxAge` / `MaxAgeTeenager` 两个常量），`[Serializable]` 标记与 `ToString()` 的格式串也没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/DynamicBodyProperties.cs`（86 行）与 `bannerlord-1.4.6/TaleWorlds.Core/DynamicBodyProperties.cs`（85 行）逐成员比对 public/protected 表面。**与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**；嵌套写法差异属反编译形态（1.4.5 用 C# 12 主构造器单行声明，1.4.6 反编译成块体）。**并且 1.4.5 的原始源码解开了本段上文标记为无法判定的那一条**：该文件第 23–35 行的 `operator ==` 原始写法是 `if ((object)a == (object)b) { return true; }` 再 `if ((object)a == null || (object)b == null) { return false; }` 之后逐字段比 —— **首项确实是装箱后的引用相等比较，不是自身递归调用**。1.4.6 反编译产物里那个 `a == b` 首项是渲染丢失装箱转换造成的假象。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 宿主：[BodyProperties](../BodyProperties) 持有它并把 `Age` / `Weight` / `Build` 三个字段转发到 `DynamicProperties`
- 另一半：[StaticBodyProperties](../StaticBodyProperties) 是同一宿主里的静态特征位包，两者合成完整的体型
- 随机化来源：[FaceGen](../FaceGen) 的 `GetRandomBodyProperties(...)` 产出的正是组合后的 [BodyProperties](../BodyProperties)，其动态部分在 min/max 之间插值
- 序列化：[BodyPropertiesJsonConverter](../BodyPropertiesJsonConverter) 把组合后的 [BodyProperties](../BodyProperties) 写成 `{"_data": "<BodyProperties>…"}`，动态部分就出现在那个 XML 串的 `age` / `weight` / `build` 属性上
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../BodyProperties`](../BodyProperties) · [`../StaticBodyProperties`](../StaticBodyProperties) · [`../FaceGen`](../FaceGen)
- 父索引：[`../_index`](../_index)
