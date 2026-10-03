---
title: "WindingOrder"
description: "全局命名空间（无）里的三值枚举：None / Cw / Ccw。唯一生产者是 Vec2.GetWindingOrder，判据是二阶行列式 Vec2.CCW 的正负；唯一消费者 MBMath 的线段相交判断把 None 当作不相交。"
---

# WindingOrder

**Namespace:** **(global)** —— 这个类型不在任何命名空间里
**Module:** **(global)** —— 同上
**Type:** `public enum WindingOrder`
**Base:** 无
**File:** `TaleWorlds.Library/WindingOrder.cs`（13 行，全文如下）

```csharp
using System;

public enum WindingOrder
{
    None,
    Cw,
    Ccw
}
```

## 概述

三个值、零方法、零实现。这是整个 `TaleWorlds.Library` 里**唯一一个落在全局命名空间的类型**——它没有 `namespace` 块，所以 C# 代码里 `using TaleWorlds.Library;` 之后可以直接写 `WindingOrder`，但这个类型名在**每一个**编译单元里都可见（包括你没引用 TaleWorlds.Library 的那些）。同名冲突的风险是真实存在的。

它在 1.3.0 的整棵源码树里只有**一个生产点、一处消费点**：

```
Vec2.GetWindingOrder(first, second, third)     ← 唯一生产者  TaleWorlds.Library/Vec2.cs:102
        │  WindingOrder
        ▼
MBMath.CheckLineSegmentToLineSegmentIntersection(...)   ← 唯一消费者  TaleWorlds.Library/MBMath.cs:614
```

生产者的实现体全部内容如下（`Vec2.cs:102-115`）：

```csharp
public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)
{
    Vec2 vb = second - first;
    float num = Vec2.CCW(third - second, vb);      // Vec2.CCW 在 Vec2.cs:118
    if (num > 0f) return WindingOrder.Ccw;
    if (num < 0f) return WindingOrder.Cw;
    return WindingOrder.None;
}
```

`Vec2.CCW(va, vb)` 就是二阶行列式 `va.x * vb.y - va.y * vb.x`（`Vec2.cs:118-121`）。

## 心智模型

**把它当成「三点朝向的三态结果」，其中第三态（`None`）不是「不知道」，而是「三点共线」这个确定的答案。**

三条必须内化的规则：

**规则一：`None` 的语义是「叉积为零」，不是「无效」。** 判据是严格 `> 0f` 和严格 `< 0f` 两个分支，其余全部落到 `return WindingOrder.None`。所以 `None` 覆盖三种情况：三点真正共线、坐标里有 NaN/Inf（NaN 与任何数比较都是 false）、以及数值精度不足以分辨方向的「几乎共线」。**`None` 是一个静默的退化出口，不是错误信号。**

**规则二：参数顺序决定方向，输入是「有序三点」而不是「两条边」。** 签名是 `(first, second, third)`，函数体先算 `vb = second - first`，再算 `CCW(third - second, vb)`。也就是说它把 `first → second → third` 当成一条折线，返回「从 first→second 转向 second→third 时是左转还是右转」。**调换 `first` 和 `third` 会让 `Cw` 与 `Ccw` 互换**；调换任意两个相邻点则结果完全翻转。

**规则三：`None` 在唯一的消费者里等价于「不相交」。** `MBMath.CheckLineSegmentToLineSegmentIntersection`（`MBMath.cs:614-618`）的实现只有一行：

```csharp
return Vec2.GetWindingOrder(segment1Start, segment2Start, segment2End) != Vec2.GetWindingOrder(segment1End, segment2Start, segment2End)
    && Vec2.GetWindingOrder(segment1Start, segment1End, segment2Start) != Vec2.GetWindingOrder(segment1Start, segment1End, segment2End);
```

这是经典的「异侧测试」（crossing test）。它对两个「对边」的 winding 做 `!=`。**问题在于：两条线段共线且重叠时，四个 winding 全是 `None`，`None != None` 是 false，第一个 `&&` 直接短路，返回 false。** 也就是说 **`MBMath` 在 1.3.0 里不检测共线重叠的线段相交**——这是标准 crossing test 的已知缺陷，引擎没有额外打补丁。

## 关键成员

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | 0 | 三点共线 / 数值退化。**`GetWindingOrder` 的 `else` 出口**（`Vec2.cs:114`），也是唯一被 `MBMath` 真正特殊对待的值——它让线段相交判断返回 false。写 `switch` 时**不要给 `None` 一个「当作 Cw 处理」的默认分支**，那会把共线情形算成相交。 |
| `Cw` | 1 | 顺时针（叉积为负）。`Vec2.cs:112` 的 `if (num < 0f)` 分支。 |
| `Ccw` | 2 | 逆时针（叉积为正）。`Vec2.cs:108` 的 `if (num > 0f)` 分支。**注意是 CCW（大写 C）在前，不是 `CCW` 这个缩写混进类型名。** |

**没有 `Count` / `Count` 哨兵。** 跟 [ActionCodeType](../../mission-ext/ActionCodeType) 那类枚举不同，这里既没有元素计数哨兵，也没有区间标记常量。三个值就是全部。

## 真实示例

判断一个点在有向三角形内部——这是 `WindingOrder` 在引擎之外最典型的用法，写法上必须保证每次调用的参数顺序一致：

```csharp
using TaleWorlds.Library;

public static bool IsPointInTriangle(Vec2 p, Vec2 a, Vec2 b, Vec2 c)
{
    // 三个 winding 必须用同一环绕方向求，否则 Cw/Ccw 会互相打架
    WindingOrder w1 = Vec2.GetWindingOrder(a, b, p);
    WindingOrder w2 = Vec2.GetWindingOrder(b, c, p);
    WindingOrder w3 = Vec2.GetWindingOrder(c, a, p);

    // 点落在某条边上时至少一个 winding 是 None，此时判为「在内部（含边界）」
    if (w1 == WindingOrder.None || w2 == WindingOrder.None || w3 == WindingOrder.None)
    {
        return true;
    }
    return w1 == w2 && w2 == w3;
}
```

判断一条有向边相对一个点的左右（这正是 `Vec2.GetWindingOrder` 内部做的事）：

```csharp
public static bool IsPointLeftOfEdge(Vec2 edgeFrom, Vec2 edgeTo, Vec2 p)
{
    return Vec2.GetWindingOrder(edgeFrom, edgeTo, p) == WindingOrder.Ccw;
}
```

用引擎现成的线段相交（**记得它不处理共线重叠**）：

```csharp
using TaleWorlds.Library;

bool crossed = MBMath.CheckLineSegmentToLineSegmentIntersection(
    lineA.Start, lineA.End,
    lineB.Start, lineB.End);
```

## 风险与边界

- **全局命名空间。** `WindingOrder.cs` 里没有 `namespace` 块，所以这个类型在任何文件里都可见，包括**不引用 TaleWorlds.Library 的项目**。你自己在某个 global namespace 里也定义 `WindingOrder` 就会撞名，报 CS0104「引用不明确」。要消歧必须写全名——但全名就是 `WindingOrder`，没有办法用命名空间限定。**只能改名或加 `using` 别名**（`using Wo = WindingOrder;`）。
- **`None` 混着「共线」和「数值垃圾」。** `NaN > 0f` 与 `NaN < 0f` 都是 false，所以坐标里有 NaN 时你会得到 `None` 而不是崩溃或异常。**下游拿 `None` 当成「共线」处理就会在几何坏掉的地方静默走错分支。** 如果你的几何输入可能含 NaN，请在调 `GetWindingOrder` 之前自己 `IsValid` 检查（`Vec2` 有自己的 `IsValid` 路径可走）。
- **`MBMath.CheckLineSegmentToLineSegmentIntersection` 对共线重叠返回 false。** `MBMath.cs:617` 的两个 `!=` 在四个 winding 全是 `None` 时短路。**「两条线段重叠」和「两条线段不相交」在这个 API 上无法区分**——这是引擎自带的缺陷，不是你的用法问题。需要处理重叠时得自己做投影区间重叠测试。
- **参数顺序敏感，且没有任何文档化的约定。** `GetWindingOrder(first, second, third)` 里第一条边是 `first→second`、第二条边是 `second→third`。`MBMath` 的调用刻意把 `segment2Start` / `segment2End` 塞在中间位置（`GetWindingOrder(segment1Start, segment2Start, segment2End)`）——**这依赖「第二点必须是拐点」这个隐含契约**，你随手改成 `(segment1Start, segment1End, segment2Start)` 会得到反向的 winding，虽然 `!=` 判定对称、结果碰巧不变，但一旦你自己拿它做单侧判断就会错。
- **只有 `float` 精度。** `Vec2.CCW` 全程 `float`。三个点非常接近时叉积会下溢/抵消成 0，`None` 的概率远高于你的直觉。**不要把这个判定用在「几乎共线」的场景上**（比如判断角色是不是正对着某个方向）。
- **这个枚举跟网格法线绕序没关系。** 名字里的 "winding" 在图形学里也指三角形顶点的绕排，但引擎里 `InvertFacesWindingOrder`（`ManagedMeshEditOperations.cs:90`）用的是 native 的 `UIntPtr` 接口，**返回 `void`、不碰这个枚举**。两者同名不同物，不要混。
- **枚举本身没有 `[Flags]`。** 但它被放在和「旗标式判断」相邻的位置，容易让人误用 `HasFlag`。`Cw` 与 `Ccw` 是互斥的语义，**按位或没有意义**。

## 跨版本提示

- **六个源码树里只有五棵含这个文件**（1.4.5 是残缺树，没有 `TaleWorlds.Library/WindingOrder.cs`）。在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 上，public/protected 声明都是 **1 条**（枚举本体本身），**三个成员的顺序与隐式值 `None=0, Cw=1, Ccw=2` 完全一致**。
- **生产者和消费者也没换人。** `Vec2.GetWindingOrder`（`Vec2.cs:102`）和 `MBMath.CheckLineSegmentToLineSegmentIntersection`（`MBMath.cs:614`）在 1.3 → 1.5 之间签名不变，`MBMath` 里那一行 crossing test 的写法也没变——**共线重叠返回 false 这个行为同样被保留**。
- **对 mod 的实际含义：** 跨版本完全安全，不存在「升级后某个值消失」的问题。但也因为 `None` 的语义和共线缺陷都没修，**不要指望升级会替你解决几何边界情况**。
- 唯一要留意的是它仍在全局命名空间：如果某个更高版本终于把它挪进了 `TaleWorlds.Library`，你的裸 `WindingOrder` 引用仍然能编译（`using TaleWorlds.Library;` 已在），但裸 `using System;` 之外其他地方会开始要求这个 using。

## 依赖关系

- 唯一生产者：[Vec2](../../core-extra/Vec2) 的 `GetWindingOrder(Vec2, Vec2, Vec2)`（`Vec2.cs:102`）与它调用的 `Vec2.CCW(Vec2, Vec2)`（`Vec2.cs:118`）
- 唯一消费者：[MBMath](../../core-extra/MBMath) 的 `CheckLineSegmentToLineSegmentIntersection`（`MBMath.cs:614`）
- 同名易混：`ManagedMeshEditOperations.InvertFacesWindingOrder()` 与 `IManagedMeshEditOperations.InvertFacesWindingOrder(UIntPtr)`——原生网格面绕序翻转，与本枚举无关
- 命名空间位置：与 `TaleWorlds.Library` 里的其他类型（[Vec2](../../core-extra/Vec2)、[Vec3](../../core-extra/Vec3)、[MBMath](../../core-extra/MBMath)）不同，本类型在 global namespace，源码树里 `TaleWorlds.Library/WindingOrder.cs` 是唯一没有 `namespace` 声明的类型文件之一
- 桶首页：[campaign-ext API 分区](../)
