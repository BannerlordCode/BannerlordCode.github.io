---
title: "Color"
description: '用 0 到 1 浮点分量表示的 RGBA 颜色值类型，提供 HSV/整型/字符串互转与线性插值，是引擎里颜色数据的基础载体。'
---
# Color

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Color`
**Base:** 无（值类型，继承自 `System.ValueType`）
**File:** `TaleWorlds.Library/Color.cs`

> 版本差异：1.3.15 与 1.4.5 的公开成员与字段完全一致；`Black` / `White` 在 1.4.5 改为表达式体属性，构造时 alpha 仍默认 1，行为不变。

## 一句话职责

它是引擎统一使用的「颜色盒子」：四个 0–1 浮点分量（红/绿/蓝/透明度），既能当向量算加减乘、也能在 HSV、整型 ARGB、十六进制字符串之间来回转换。

## 心智模型

- **生命周期**：`struct`，值类型。随使用处栈上/字段里存在，用完即弃，无引用、无 GC 压力；可随意复制传递。
- **谁创建**：任何需要颜色的代码 `new Color(...)` 或经 `FromUint` / `FromHSV` / `ConvertStringToColor` 创建；UI、材质、调试绘制、Banner 都消费它。
- **所属层**：Foundation（`TaleWorlds.Library`）底层数据类型，被 Core / TwoDimension / GauntletUI / Engine 各层共用。
- **关键约定**：分量一律是 **0.0–1.0 的浮点**，不是 0–255 的字节。这是和大多数外部格式互转时最容易踩的坑。

## 何时用 / 何时不要用

- **用**：在代码里构造、传递、插值、序列化颜色；从整型 ARGB（如材质/网络）转回颜色；按 HSV 生成主题色；把颜色写进 UI 样式或调试绘制。
- **不要用**：需要一整组命名颜色时用 [Colors](../Colors) 预定义集合，而不是到处手写 `new Color`；需要 UI 绑定辅助用 [ColorExtensions](../ColorExtensions)。大量逐像素操作用引擎原生 `Vec3`/`Vector3` 或整型缓冲，别逐点 `new Color` 装箱。

## 依赖图
- [ColorExtensions](../ColorExtensions) — 对 `Color` 的扩展方法集合
- [Colors](../Colors) — 引擎预定义的命名颜色
- [DebugColor](../DebugColor) — 调试用颜色枚举（`Common` 的 `Debug.Print` 用到）
- [Vec3](../Vec3) — `ToVec3` / `FromVector3(Vec3)` 互转
- [MathF](../MathF) — `Lerp` / `FromHSV` 内部依赖的浮点工具
- [崩溃边界](../../../architecture/crash-boundaries) — 颜色转换失败的异常边界
- [SDK 总览](../../../architecture/sdk-overview) — Library 位于 Foundation 层

## 风险段

- **分量范围是 0–1，不是 0–255**：构造 `new Color(255f, 0f, 0f)` 会得到远超 1 的过曝红。`ToUnsignedInteger` / `FromUint` 会自动做 ×255 换算，但**构造函数不会**。从字节来的颜色应先除以 255。
- **`ConvertStringToColor` 强格式**：要求带前导 `#` 且正好 8 位十六进制（`#RRGGBBAA`）。位数不对或含非十六进制字符会由 `Substring` / `int.Parse` 抛 `FormatException` / 越界异常，需调用方校验。
- **值类型按值传递**：`Color` 是 struct，所有运算符（`*`/`+`/`-`）和 `Lerp` 都**返回新 `Color`**，不会修改原值。写 `c = c * 0.5f;` 才生效，别期望原地缩放。
- **`==`/`!=` 是浮点精确比较**：逐分量 `==`，因浮点误差，两个视觉相同的颜色可能判不等。做近似比较请自行引入容差，不要用 `==`。
- **`FromHSV` 在 s==0 时忽略 h**：返回灰度 `(v,v,v,1)`，合法但容易误以为 h 生效。
- **alpha 默认 1**：`Black` / `White` 以及省略 alpha 的构造都是不透明；要半透明必须显式传 alpha。

## 成员说明

### 构造函数 `Color(float red, float green, float blue, float alpha = 1f)`
直接以 0–1 浮点分量建色。副作用：无；**调用时机**：最基础的建色方式。

### 公共字段 `Red` / `Green` / `Blue` / `Alpha`
四个 `public float`，直接可读写。因为是字段而非属性，修改 `color.Red = 0.5f` 对本副本即时生效（但不影响其他副本）。

### `ToVector3()` / `ToVec3()`
分别转成 `System.Numerics.Vector3` 与引擎 `Vec3`；前者忽略 alpha，后者带 alpha 作为第四分量。

### 运算符 `*`(Color,float) / `*`(Color,Color) / `+`(Color,Color) / `-`(Color,Color)
分量逐一相乘 / 相加 / 相减，返回新 `Color`。常用于调暗（`c * 0.5f`）、正片叠底（`c1 * c2`）、混合叠加。

### 静态属性 `Black` / `White`
返回 `(0,0,0,1)` 与 `(1,1,1,1)` 常量色，alpha 均为 1。

### 运算符 `==` / `!=` 与 `Equals` / `GetHashCode`
`==` 逐分量精确比较；`Equals(object)` 做类型判断后复用 `==`；`GetHashCode` 直接用默认值哈希（**不**基于四个分量），因此不要把它放进依赖哈希相等的字典/集合做颜色去重。

### `FromVector3(Vector3)` / `FromVector3(Vec3)`
从三维向量建色，alpha 固定为 1。

### `Length()`
返回四分量平方根长度（`√(r²+g²+b²+a²)`），用于颜色向量的模长/归一化判断。

### `ToUnsignedInteger()` / `FromUint(uint)`
互转整型 ARGB：打包为 `(alpha<<24)|(red<<16)|(green<<8)|blue`（每分量 ×255）；解包反之（每字节 ×0.003921569）。是和网络/材质/原生层交换颜色的主通道。

### `FromHSV(float h, float s, float v)`
按色相/饱和度/明度建色（h 单位为「圈」的浮点比例，通常 0–1）。`s==0` 时返回灰度。适合程序化生成主题色。

### `ConvertStringToColor(string)` / `UIntToColorString(uint)`
字符串互转：`ConvertStringToColor` 解析 `#RRGGBBAA`；`UIntToColorString` 把整型 ARGB 转成 8 位十六进制串（注意它**不带** `#` 前缀）。

### `Lerp(Color start, Color end, float ratio)`
线性插值，`ratio` 夹在 0–1：返回 `start*(1-ratio) + end*ratio`，逐分量。做颜色渐变/过渡用。

### `ToString()`
返回 `#RRGGBBAA` 形式的八位十六进制（自带 `#` 前缀），便于日志/调试。

## 最小真实示例

**示例 1 — 在浮点与整型 ARGB 之间往返**

```csharp
Color red = new Color(1f, 0f, 0f, 1f);
uint packed = red.ToUnsignedInteger();
Color back = Color.FromUint(packed);
```

**示例 2 — 用 HSV 生成主题色并做渐变**

```csharp
Color sky = Color.FromHSV(0.55f, 0.4f, 0.9f);
Color blended = Color.Lerp(Color.Black, Color.White, 0.5f);
uint uiColor = blended.ToUnsignedInteger();
```

## 导航

- ↑ Parent：[core-extra 索引](../)
- ↔ Sibling：[ColorExtensions](../ColorExtensions)、[Colors](../Colors)、[DebugColor](../DebugColor)、[Vec3](../Vec3)、[Common](../Common)
- 相关：[MathF](../MathF)、[崩溃边界](../../../architecture/crash-boundaries)、[SDK 总览](../../../architecture/sdk-overview)
