---
title: "Color"
description: "引擎 UI 与 2D 的 RGBA 浮点颜色 struct：分量在 [0,1]，ToUnsignedInteger / FromUint 用 ARGB 布局互转，但 ToString 与 UIntToColorString 的输出格式并不一致——一个带 # 号一个不带。"
---

# Color

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Color`
**Base:** 无（`System.ValueType`；不实现任何接口）
**File:** `TaleWorlds.Library/Color.cs`（全文 289 行 / 8121 字节）

## 概述

`Color` 是引擎 UI 与 2D 绘制的颜色类型。四个 **public 字段** `Red` / `Green` / `Blue` / `Alpha`，取值区间约定是 `[0, 1]`——不是 `[0, 255]`。构造函数 `Color(float red, float green, float blue, float alpha = 1f)` 的 `alpha` 默认 1f，即**默认不透明**。

它是 [Vec3](../Vec3) 的表亲但**不是同一个东西**。`Color` 有 RGBA 四个语义通道；`Vec3` 有 XYZ 三个参与数学运算的分量加一个默认 `-1f` 的 `w` 槽位。两者通过 `ToVec3()` / `Color.FromVector3(Vec3)` 互转，转换时**丢弃 alpha**（`FromVector3(Vec3)` 固定用 `1f` 做 alpha）。

在树里的主要用途有两类：一是 UI 样式与画刷解析（`TaleWorlds.GauntletUI` 的 `BrushFactory` 从 XML 属性读 `#RRGGBBAA` 字符串），二是轻量消息着色（`InformationMessage` 的 `Color` 属性默认就是 `Color.White`）。

## 心智模型

把 `Color` 当成**「RGBA 浮点四元组 + 三种编码转换器」**。核心是搞清楚三种编码之间到底谁配谁。

**编码一：`uint` ARGB。** `ToUnsignedInteger()` 的实现是四个 `(byte)(分量 * 255f)`，然后 `((int)alphaByte << 24) + (r << 16) + (g << 8) + b`。`FromUint(uint color)` 反过来读 `color >> 24` 当 alpha、`>> 16` 当 R、`>> 8` 当 G、低 8 位当 B，除以 `0.003921569f`（即 `1/255f`）还原。**布局是小端的 ARGB**：`0xAARRGGBB`。阵营色 `IFaction.Color` 就是这个 `uint`——`SettlementNameplateVM` 里 `mapFaction.Color` 直接喂进 `UIntToColorString`。

**编码二：`#RRGGBBAA` 字符串（`ToString`）。** 无参 `ToString()` 做四个 `(byte)(分量 * 255f)`，每个 `ToString("X2")` 大写两位，前置 `#`。输出 9 个字符。

**编码三：`RRGGBBAA` 字符串（`UIntToColorString`）。** 注意这个静态方法**不加 `#`**，而且它做的是 `ToString("X")` 后手动补零 + `Substring(len - 2)` 截断。所以 `Color.White.ToUnsignedInteger()` 得到 `0xFFFFFFFF`，`UIntToColorString` 返回 `"FFFFFFFF"`（8 字符），**要拼成合法 CSS/XML 颜色串必须自己加 `#`**——`SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs:85` 就是这么写的：

```csharp
string hashPrefix = "#";
this._bindFactionColor = hashPrefix + Color.UIntToColorString((mapFaction != null) ? mapFaction.Color : uint.MaxValue);
```

**编码四（`ConvertStringToColor`）：只吃 `#RRGGBBAA`。** 它做 `color.Substring(1, 2)`、`(3, 2)`、`(5, 2)`、`(7, 2)`，也就是**硬跳过第 0 个字符当作 `#`，然后读 4 个两字符十六进制段**。所以传 6 字符的 `#RRGGBB` 会抛 `ArgumentOutOfRangeException`，传不带 `#` 的 8 字符串会把第一个数字当 `#` 吃掉再错位。

**第五个成员 `Length()` 把 alpha 也算进去。** 实现是 `MathF.Sqrt(Red*Red + Green*Green + Blue*Blue + Alpha*Alpha)`——这是 RGBA 四维空间的模长，**不是**常见的 RGB 亮度也不是感知亮度。名字叫 `Length` 会让人误以为是颜色强度，实际更接近「这个颜色的四维向量长度」。透明色 `(1,1,1,0)` 的 `Length()` 是 `1.732`，不透明白是 `2.0`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Red` / `Green` / `Blue` / `Alpha` | `public float Red;` 等四个 | **public 字段**，不是属性。取值约定 `[0, 1]`。UI 样式和反序列化代码直接写字段 |
| 构造函数 | `public Color(float red, float green, float blue, float alpha = 1f)` | 唯一构造函数。`alpha` 默认 `1f`（不透明），与 .NET `System.Drawing.Color` 的默认相反 |
| `Black` / `White` | `public static Color Black { get; }` / `White { get; }` | **只有这两个静态颜色**，且都是属性（每次访问 `new` 一个值类型，不分配堆）。`Black` 是 `(0,0,0,1)`，`White` 是 `(1,1,1,1)`——**都不是 alpha 0**。没有 `Red`/`Green`/`Blue` 等命名常量 |
| `ToVector3` / `ToVec3` | `public Vector3 ToVector3()` / `public Vec3 ToVec3()` | 降到三维，**丢弃 alpha**。前者给 Unity 渲染层，后者给引擎内部数学 |
| `FromVector3` ×2 | `public static Color FromVector3(Vector3)` / `FromVector3(Vec3)` | 从三维升四维，**alpha 固定 `1f`**。所以三维色转回来一定不透明 |
| `ToUnsignedInteger` | `public uint ToUnsignedInteger()` | 打包成 `0xAARRGGBB`。用的是 `(byte)(分量 * 255f)` |
| `FromUint` | `public static Color FromUint(uint color)` | 解包 `0xAARRGGBB`。用 `0.003921569f`（≈ `1/255`）还原 |
| `ToString()` | `public override string ToString()` | 输出 `#` + 四个 `X2` 大写十六进制，即 `#RRGGBBAA`。**没有无 `#` 版本** |
| `UIntToColorString` | `public static string UIntToColorString(uint color)` | 静态版，**输出 `RRGGBBAA`，不带 `#`**。做 `ToString("X")` 后补零并 `Substring(len - 2)` 截断（因为 `>> 8` 移出的段可能超过两位） |
| `ConvertStringToColor` | `public static Color ConvertStringToColor(string color)` | 解析 `#RRGGBBAA`。**硬编码 4 个 `Substring` 段，长度不对直接抛**。每段 `int.Parse(..., NumberStyles.HexNumber)` |
| `FromHSV` | `public static Color FromHSV(float h, float s, float v)` | HSV → RGB，**返回时 alpha 固定 `1f`**。`s == 0` 时直接返回灰阶。`h` 会被 `* 6f` 后 `Math.Floor` 分六段 |
| `Lerp` | `public static Color Lerp(Color start, Color end, float ratio)` | **逐通道线性插值，alpha 也参与**：`start.C * (1-ratio) + end.C * ratio`。不走 gamma 校正 |
| `Length` | `public float Length()` | `Sqrt(R²+G²+B²+A²)`。**方法不是属性**，且包含 alpha |
| `==` / `!=` | `public static bool operator ==(Color a, Color b)` | **逐分量精确浮点相等**。**注意 `Equals` 内部就是调 `this == b`**，所以两者语义完全一致 |
| `Equals` | `public override bool Equals(object obj)` | `obj is Color` 且 `this == (Color)obj`。装箱敏感但不额外容差 |
| `GetHashCode` | `public override int GetHashCode()` | **`return base.GetHashCode();`**——直接透传到 `System.Object.GetHashCode()`，即**基于对象身份的哈希**。这是本类最严重的一个缺陷，见「风险与边界」 |
| `+` / `-` | 两个静态二元运算符 | 逐分量加减，**alpha 也算**。`+` 不做饱和处理 |
| `*`（两个） | `Color * float` / `Color * Color` | 前者四个分量同乘 `f`；后者**逐分量相乘**（不是在色彩空间里混合） |
| `ColorExtensions.AddFactorInHSB` | 见扩展类 | 唯一为 `Color` 提供的扩展方法，在 HSB 空间里加偏移。接收者扩展 |

## 真实示例

从 XML 样式读颜色（逐字照抄自 `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs:175` 与 `:344`）：

```csharp
switch (brushAnimationKeyFrame.AnimationPropertyType)
{
case BrushAnimationProperty.BrushAnimationPropertyType.Color:
case BrushAnimationProperty.BrushAnimationPropertyType.FontColor:
case BrushAnimationProperty.BrushAnimationPropertyType.TextGlowColor:
case BrushAnimationProperty.BrushAnimationPropertyType.TextOutlineColor:
    brushAnimationKeyFrame.InitializeAsColor(time, Color.ConvertStringToColor(colorAttribute.Value));
    break;
}
```

同一文件里 `style.FontColor`、`style.TextGlowColor`、`style.TextOutlineColor` 都走 `ConvertStringToColor`——**这决定了你在 Prefab XML 里写的颜色串必须是 `#RRGGBBAA` 九字符**。少写 alpha 的 `#RRGGBB` 七字符会直接抛 `ArgumentOutOfRangeException`。

给消息着色（逐字照抄自 `TaleWorlds.CampaignSystem/CampaignBehaviors/NotablesCampaignBehavior.cs:278`）：

```csharp
InformationManager.DisplayMessage(new InformationMessage(textObject.ToString(), new Color(0f, 1f, 0f, 1f)));
```

`new Color(0f, 1f, 0f, 1f)` 是引擎的「亮绿色提示语」标准写法。`InformationMessage` 的默认值是 `Color.White`（见 `TaleWorlds.Library/InformationMessage.cs:37`），所以不传颜色就是白色正文。

阵营色转绑定串（`SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs:85` 的形状）：

```csharp
public override void RefreshDynamicProperties(bool forceUpdate)
{
    base.RefreshDynamicProperties(forceForce);
    IFaction mapFaction = this.Settlement.MapFaction;
    this._bindFactionColor = "#" + Color.UIntToColorString((mapFaction != null) ? mapFaction.Color : uint.MaxValue);
}
```

`mapFaction.Color` 是 `uint`（ARGB）。`uint.MaxValue` 是「没有阵营」时的兜底 → `FFFFFFFF` → 白色。**`#` 必须自己拼**——这是 `UIntToColorString` 与 `ToString()` 唯一的、也是最容易踩的差异。

生成 UI 需要的十六进制串（推荐路径，规避上面的坑）：

```csharp
Color factionColor = Color.FromUint(faction.Color);
string xmlSafe = factionColor.ToString();

Color transparentRed = new Color(1f, 0f, 0f, 0f);
string transparentXml = transparentRed.ToString();

Color parsed = Color.ConvertStringToColor(xmlSafe);
```

第一行是**正确写法**：`FromUint` 走一遍 ARGB 往返后 `ToString()` 一定带 `#` 且一定是 9 个字符，无需手工拼串。反例是直接 `Color.UIntToColorString(faction.Color)`——省了一次转换，但结果缺 `#`，要自己记得补。

HSV 生成调色板（`FromHSV` 返回值 alpha 恒为 1）：

```csharp
Color[] teamPalette = new Color[8];
for (int i = 0; i < teamPalette.Length; i++)
{
    float hue = i / (float)teamPalette.Length;
    teamPalette[i] = Color.FromHSV(hue, 0.7f, 0.95f);
    // teamPalette[i].Alpha 必然是 1f
}
```

**`FromHSV` 没有 alpha 参数。** 要半透明的队伍色必须手动改字段或套 `Lerp`：`teamPalette[i].Alpha = 0.5f;`——因为 `Alpha` 是 public 字段，可以直接赋值。

淡入淡出（`Lerp` 会同时插值 alpha，这是多数人没意识到的）：

```csharp
Color startColor = new Color(0f, 0f, 0f, 0f);
Color endColor = new Color(1f, 0.85f, 0.2f, 1f);

Color currentColor = Color.Lerp(startColor, endColor, fadeAmount);
```

`fadeAmount` 从 0 到 1 时 alpha 也从 0 走到 1，所以**这一行同时完成了颜色和透明度的过渡**。如果只想要颜色过渡，把两端 alpha 设成相同值即可。

## 风险与边界

- **`GetHashCode()` 直接返回 `base.GetHashCode()`。** 这是**基于对象身份**的哈希，不是基于值的。对结构体来说这是明确的错误用法——两个相等的 `Color` 放进 `Dictionary` 会变成两个独立的键。**绝对不要把 `Color` 作为 `Dictionary`/`HashSet` 的键**，也不要用它去实现任何基于哈希的容器。相关的 [Vec2](../Vec2) 和 [Vec3](../Vec3) 虽然哈希也很弱，但至少还是按分量算的；`Color` 是彻底退化了。
- **`UIntToColorString` 不带 `#`，`ToString()` 带 `#`。** 同一份数据两种输出，直接用会导致 XML/样式解析失败或页面 CSS 失效。**推荐路径是 `Color.FromUint(x).ToString()`**，一次转换拿到规范格式。
- **`ConvertStringToColor` 硬编码 4 段且必须有 `#`。** `#RRGGBB`（7 字符）抛 `ArgumentOutOfRangeException`（`Substring(7, 2)` 越界）；不带 `#` 的 8 字符会静默错位（把第一个十六进制位当 `#` 吃掉）。它也**不支持 3 位简写**（`#RGB`）。
- **`FromHSV` 丢弃 alpha 输入，因为根本没有 alpha 参数。** 返回的 `Color` alpha 恒为 `1f`。需要透明度就之后直接写 `result.Alpha = 0.5f;`。
- **`ToUnsignedInteger` 用 `× 255f`，`Vec3.ToARGB` 用 `× 256f`。** 同一个字节、两种取整方式，所以 `(0.5f, 0.5f, 0.5f, 0.5f)` 经 `Color.ToUnsignedInteger()` 得 `0x7F7F7F7F`，经 `Vec3.ToARGB` 得 `0x80808080`（因为 `0.5f * 256f = 128`，`0.5f * 255f = 127.5f → 127`）。**两套编码不要混用同一份颜色数据。**
- **`==` 是精确浮点相等，没有容差。** `new Color(0.5f, 0, 0, 1f) == new Color(0.1f*5f, 0, 0, 1f)` 可能为 `false`（浮点误差）。要比较颜色得自己比通道差值。`Equals` 内部就是 `this == b`，所以同样没有容差。
- **`Length()` 包含 alpha，不是亮度。** 半透明的纯色 `(1,1,1,0)` 的 `Length()` 是 `1.732`，比不透明红的 `1.414` 大。要感知亮度请自己按 `0.2126R + 0.7152G + 0.0722B` 算，或者用 `Lerp` 后的 alpha 做混合。
- **`+` / `-` 不做饱和处理。** 两个 `Color(0.8f, ...)` 相加得到 `1.6f`，**不会**自动钳到 1。渲染端是否钳制取决于具体消费方；写工具代码时要么自己 `Math.Clamp`，要么用 `Lerp`（`ratio` 在 `[0,1]` 内时结果天然在两端之间）。
- **`Color * Color` 是逐分量相乘，不是色彩混合。** 两个半透明白相乘得到 `alpha` 平方。真正的混合要用 `Lerp`。
- **只有 `Black` 和 `White` 两个静态颜色。** 没有 `Red`/`Green`/`Blue`/`Gray`。`UIColors.PositiveIndicator` / `NegativeIndicator` 这类 UI 语义色在 `TaleWorlds.GauntletUI` 侧，不是本类型的一部分。
- **与 [Vec3](../Vec3) 的互转都丢 alpha。** `ToVec3()` 无 alpha 概念（`Vec3` 的 `w` 是默认 `-1f` 的独立槽位，语义完全不同）；`FromVector3(Vec3)` 固定 alpha = 1f。**要保留透明度就别经过 `Vec3`。**
- **不实现任何接口。** 没有 `IEquatable<Color>`，和实现了 `IEquatable<Vec2i>` 的整数版本不同。泛型约束到接口的用法在这里不成立。

## 跨版本提示

`Color.cs` 在 1.3.0 是 8121 字节，1.3.15 起到 1.5.3 都是 **8143 字节**，差 22 字节**全部来自反编译输出的局部变量重命名**：`float red/green/blue/alpha` 被改成 `num/num2/num3/num4`，`Color b` 被改成 `Color color`，`string s/s2/s3/s4` 被改成 `string text/text2/text3/text4`。我把两版的 `public` 行抽出来排序做 `diff`，**输出为空**——public 成员集合跨 1.3 → 1.5 三个大版本逐条等价。

包括那几个坑也一个没修：`GetHashCode()` 依然透传 `base.GetHashCode()`，`ConvertStringToColor` 依然硬编码四个 `Substring`、`UIntToColorString` 依然不带 `#` 前缀、`ToUnsignedInteger` 依然 `× 255f` 而 [Vec3](../Vec3) 依然 `× 256f`。**所以这个类型在所有版本上行为一致，升级既不会让它变好也不会变坏——但你的代码里的这些假设也永远不会因为升级而自动修好。**

## 依赖关系

- 三维对应：[Vec3](../Vec3) 通过 `ToVec3()` / `FromVector3(Vec3)` 与本类型互转，但两套四分量语义不同（`Vec3.w` 默认 `-1f` 且不参与数学），转的时候 alpha 丢失
- 唯一扩展方法：[ColorExtensions](../ColorExtensions) 的 `AddFactorInHSB(this Color rgbColor, float hueDifference, float saturationDifference, float brighnessDifference)` 是全树唯一挂在 `Color` 上的扩展（注意形参名 `brighness` 是源码里的拼写）
- 语义色集合：[UIColors](../../viewmodel/UIColors) 与 [DebugColor](../DebugColor) 提供引擎预定义色，它们返回的就是本类型
- 数据来源：`TaleWorlds.GauntletUI.BrushFactory` 是最大消费方，读 Prefab XML 的 `#RRGGBBAA` 属性填进画刷与文字样式
- 消息着色：[InformationMessage](../InformationMessage) 的 `Color` 属性默认 `Color.White`，经 [InformationManager](../InformationManager) 上屏
- 阵营色载体：`IFaction.Color` 是 `uint`（ARGB），经 `UIntToColorString` 变成 UI 绑定串
- 颜色空间数学：[MBMath](../MBMath) 的 `HSBtoRGB` / `RGBtoHSB` / `ColorFromRGBA` / `GammaCorrectRGB` 是 `Color` 的同类替代品，作用在 `Vec3` 上；本类型的 `FromHSV` 是自带的简化版，**两者结果不完全一致**，别混用
- 桶首页：[core-extra API 分区](../)
