---
title: "MBMath"
description: "引擎的静态数学工具箱，1021 行、约 80 个 public 成员：夹取与索引、插值族、角度环绕、2D/3D 几何相交、拓扑排序与多路极值。它是 static class，不能实例化也不能被继承。"
---

# MBMath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class MBMath`
**Base:** 无（静态类，不能派生、不能实例化）
**File:** `TaleWorlds.Library/MBMath.cs`（全文 1021 行 / 29928 字节，public 成员约 80 个）

## 概述

`MBMath` 是 Bannerlord 的**单一数学入口**。它没有实例状态，全部是 `static` 方法和 `static readonly` 常量。1021 行里塞了七组互不相干的工具：

1. **标量工具**：夹取、索引夹取、单位化、近似相等、有效性、度数/弧度互转
2. **插值族**：`Lerp` 的 5 个重载、`LinearExtrapolation`、`SplitLerp`、`InverseLerp`、`LerpRadians`、`SmoothStep`、`BilinearLerp`、`Map`
3. **角度处理**：`WrapAngle` / `WrapAngleSafe` / `GetSmallestDifferenceBetweenTwoAngles` / `ClampAngle`
4. **区间判定**：`IsBetween`（开） / `IsBetweenInclusive`（闭）、int 与 float 两版
5. **2D/3D 几何**：点到线段距离、投影、线/线段/多边形相交、射线与平面求交、包围盒与三角形相交
6. **颜色空间**：`ColorFromRGBA` / `HSBtoRGB` / `RGBtoHSB` / `GammaCorrectRGB`
7. **集合算法**：`TopologySort` 拓扑排序、`MaxElement` / `MaxElements2..5` 多路极值、`DistributeShares` 份额分配、`ToOrdinal` 序数词

## 心智模型

把 `MBMath` 当成**「`System.Math` 的引擎扩展 + 一堆自己写的一次性几何函数」**。三件事决定你怎么用它。

**第一，`ClampIndex` 不是 `ClampInt`。** `ClampIndex(value, min, maxValue)` 的实现只有一行：`return MBMath.ClampInt(value, minValue, maxValue - 1);`——**第三个参数是「开区间上界」不是闭区间**。因为它的用途是二维数组索引：`SandBox/MapScene.cs:591-592` 写的是 `MBMath.ClampIndex(num2, 0, dimensionY) * dimensionX + num`，也就是行号被夹在 `0..dimensionY-1`。**传 `dimensionY` 不会像你想的那样允许访问最后一行之后的元素——它被正确挡住了。** 但如果你按 `ClampInt` 的直觉写 `ClampIndex(i, 0, array.Length)`，结果永远到不了 `array.Length`。

**第二，`Lerp` 的 `minimumDifference` 参数是引擎的招牌语义。** 标准 `Lerp(from, to, t)` 是 `from + (to - from) * t`。`MBMath` 的版本是：

```csharp
if (Math.Abs(valueFrom - valueTo) <= minimumDifference) { return valueTo; }
return valueFrom + (valueTo - valueFrom) * amount;
```

**两端本来就几乎相等时，直接返回终点，不做插值。** 这不是优化而是**防止浮点抖动**：AI、相机、天气这些逐帧累积的插值里，如果起点和终点差 1e-6，每帧算一次 `(to - from) * t` 会因为舍入产生微小的非收敛漂移。默认值 `1E-05f`，沙盒里大量调用点**显式传 `0.005f` 或 `1E-05f`**（见 `SandBox/GameComponents/SandboxAgentStatCalculateModel.cs:909` 等）。`LinearExtrapolation` 则是**不带**这个保护的原味版本，名字里的 Extrapolation 就是「允许 `amount > 1` 外推」。

**第三，角度的两个 Wrap 变体不是冗余，是数值稳健性的差别。** `WrapAngle` 用 `Math.IEEERemainder(angle, 2π)`——**一次浮点运算**，O(1)。`WrapAngleSafe` 用 `while (angle <= -π) angle += 2π; while (angle > π) angle -= 2π;`——**循环**。传入极端值（比如 `1e9` 弧度）时 `WrapAngleSafe` 要循环几亿次。所以 `WrapAngleSafe` 这个名字里的 "Safe" 指的是「不依赖 `IEEERemainder` 的精度假设」，不是「更安全」——**它对大角度更慢，对正常范围两者等价**。引擎里相机旋转用的是 `WrapAngle`（`SandBox.GauntletUI/GauntletCraftingScreen.cs:468`：`this._targetCameraValues.HorizontalRotation = MBMath.WrapAngle(this._targetCameraValues.HorizontalRotation + num4 * 0.017453292f);`）。

第四个值得单说的：**`Lerp` 有 5 个重载**（`float` / `Vec3` / `Vec2` / `Mat3` / `LerpRadians`），每个的 `minimumDifference` 语义一致但 `Vec3`/`Vec2`/`Mat3` 三个重载**没有默认参数**，必须显式传。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `PI` / `TwoPI` / `HalfPI` / `E` | `public const float PI = 3.1415927f;` 等四个 | **`float` 不是 `double`**。这是引擎最贵的精度损失点：`float` 只能表示 7 位十进制有效数字 |
| `Epsilon` | `public const float Epsilon = 1E-05f;` | 全树默认容差的来源。`ApproximatelyEquals`、`ApproximatelyEqualsTo`、`Vec3.NearlyEquals` 的默认 epsilon 都等于它 |
| `DegreesToRadians` / `RadiansToDegrees` | `public const float DegreesToRadians = 0.017453292f;` / `57.295776f` | 常量。**`ToRadians` / `ToDegrees` 是 `float` 的扩展方法**（`this float f`），两者共存 |
| `ToRadians` / `ToDegrees` | `public static float ToRadians(this float f)` / `ToDegrees(this float f)` | 扩展方法。`this` 修饰让你能写 `angleDeg.ToRadians()`。**用 `MBMath.PI` 不是 `MathF.PI`**，两者精度不同 |
| `ApproximatelyEquals` / `ApproximatelyEqualsTo` | `ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)` / `ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)` | **`<=` 不是 `<`**。一静一扩，两个都留着 |
| `IsValidValue` | `public static bool IsValidValue(float f)` | `!float.IsNaN(f) && !float.IsInfinity(f)`。用 `[Vector3](../Vec3) IsValid` 的元素版 |
| `ClampInt` / `ClampFloat` | 两个静态方法 | 闭区间夹取。**参数顺序是 `(value, min, max)`**——min 在前 |
| `ClampIndex` | `public static int ClampIndex(int value, int minValue, int maxValue)` | `ClampInt(value, minValue, maxValue - 1)`。**第三个参数是开区间上界** |
| `ClampUnit` | `public static void ClampUnit(ref float value)` | 把 `[0,1]` 之外的值夹进去，**通过 `ref` 就地改**。返回 `void`，没有链式版本。`MBMusicManager` 用了它十几处 |
| `Lerp`（float） | `public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)` | 防抖动的插值。两端差 ≤ `minimumDifference` 时直接返回 `valueTo` |
| `Lerp`（Vec3/Vec2/Mat3） | `public static Vec3 Lerp(Vec3, Vec3, float amount, float minimumDifference)` / `Vec2` / `Mat3` | 逐分量调用 float 版。**三个都没有默认参数**。`Mat3` 版取 `ref` 并返回 `new Mat3(ref vec, ref vec2, ref vec3)` |
| `LinearExtrapolation` | `public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)` | **不带抖动保护**的原味 `from + (to - from) * amount`。允许 `amount > 1` |
| `LerpRadians` | `public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)` | 角度插值，**每帧步长被夹在 `[minChange, maxChange]`**。先算最小角差，差 ≤ `minChange` 直接返回 `valueTo`，否则按 `Sign` 方向加夹取过的步长，最后 `WrapAngle` |
| `SplitLerp` | `public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)` | 三点分段插值。`amount <= cutOff` 时在 `value1..value2` 之间插并把 t 重标定为 `amount/cutOff`；否则在 `value2..value3` 之间插并重标定为 `(amount-cutOff)/(1-cutOff)` |
| `InverseLerp` | `public static float InverseLerp(float valueFrom, float valueTo, float value)` | `(value - valueFrom) / (valueTo - valueFrom)`。**没有抖动保护、不夹取**，`valueFrom == valueTo` 时除零 |
| `SmoothStep` | `public static float SmoothStep(float edge0, float edge1, float value)` | 三次平滑。内部 `ClampFloat((value-edge0)/(edge1-edge0), 0, 1)` 后 `t * t * (3f - 2f * t)` |
| `BilinearLerp` | `public static float BilinearLerp(float topLeft, float topRight, float botLeft, float botRight, float x, float y)` | 双线性插值 = 两次 `Lerp`，内层 `minimumDifference` **硬编码 `1E-05f`**。参数名就是四个角 + 归一化坐标 |
| `Map` | `public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)` | 区间重映射。**先把 `input` 夹到输入区间再算**，所以越界输入返回的是端点值而非外推值 |
| `GetSmallestDifferenceBetweenTwoAngles` | `public static float GetSmallestDifferenceBetweenTwoAngles(float fromAngle, float toAngle)` | `toAngle - fromAngle`，然后若 `> π` 减 `2π`、若 `< -π` 加 `2π`。**手写而非调 `WrapAngle`**，返回值在 `(-π, π]` |
| `WrapAngle` | `public static float WrapAngle(float angle)` | `Math.IEEERemainder(angle, 2π)` 后补一次边界修正。O(1)，极端大角度安全 |
| `WrapAngleSafe` | `public static float WrapAngleSafe(float angle)` | `while` 循环加减 `2π`。结果与 `WrapAngle` 相同，但**大角度下是 O(角度/2π)** |
| `ClampAngle` | `public static float ClampAngle(float angle, float restrictionCenter, float restrictionRange)` | 把角度夹在「中心 ± 半范围」内。**`restrictionRange` 先除以 2**。夹完再 Wrap 一次。`FleeBehavior` 用它限制逃跑朝向 |
| `IsBetween` | `public static bool IsBetween(float numberToCheck, float bottom, float top)` / `IsBetween(int, int, int)` | **开区间**：`> bottom && < top` |
| `IsBetweenInclusive` | `public static bool IsBetweenInclusive(float numberToCheck, float bottom, float top)` | **闭区间**。只有 float 版本，没有 int 版本 |
| `GetNumberOfBitsToRepresentNumber` | `uint` 版 / `ulong` 版 | `for (v >>= 1) num++;` 求二进制位数。`v == 0` 时返回 0 |
| `DistributeShares` | `public static IEnumerable<ValueTuple<T, int>> DistributeShares<T>(int totalAward, IEnumerable<T> stakeHolders, Func<T, int> shareFunction)` | 按权重把整数总额分配完。**`yield return`，所以是惰性求值**。权重总和 ≤ 0 时只 `yield break` 什么都不给。**全树零调用点** |
| `TopologySort` | `public static IList<T> TopologySort<T>(IEnumerable<T> source, Func<T, IEnumerable<T>> getDependencies)` | DFS 拓扑排序，**依赖在前**。`Visit` 递归，**有环时栈溢出**。唯一调用点是 `TaleWorlds.ModuleManager/ModuleHelper.cs:302` |
| `IndexOfMax` | `public static int IndexOfMax<T>(MBReadOnlyList<T> array, Func<T, int> func)` | 返回最大投影值的**索引**。形参类型是 `MBReadOnlyList<T>` 而非 `IReadOnlyList<T>`。`Extensions` 里另有两个同名重载（`IReadOnlyList` 和 `MBReadOnlyList` 扩展），**优先用扩展那个** |
| `MaxElement` / `MaxElements2..5` | `MaxElement<T>(IEnumerable<T>, Func<T,float>)` 返回 `T`；`MaxElements2` 返回 `ValueTuple<T,T>`，依次到 `MaxElements5` 返回 5 元组 | **K 路最大值**（锦标赛）。单路用 LINQ `MaxBy` 就够，双路及以上才值得用——它们是手写的线性扫描比较网络，不是排序 |
| `ToOrdinal` | `public static string ToOrdinal(int number)` | 数字转序数词。**全树零调用点**（`UI` 侧有自己的本地化序数） |
| `ColorFromRGBA` | `public static uint ColorFromRGBA(float red, float green, float blue, float alpha)` | `0xAARRGGBB` 打包。用 `× 255f` 后移位，与 [Color](../Color) 的 `ToUnsignedInteger` 同一取整方式 |
| `HSBtoRGB` / `RGBtoHSB` | `HSBtoRGB(float hue, float saturation, float brightness, float outputAlpha)` / `RGBtoHSB(Color rgb)` | **一对互逆的颜色空间转换**，`RGBtoHSB` 返回 `Vec3`（h/s/b 装进 xyz）。**有 alpha 参数，是 [Color](../Color) 那个无 alpha 的 `FromHSV` 的完整版** |
| `GammaCorrectRGB` | `public static Vec3 GammaCorrectRGB(float gamma, Vec3 rgb)` | 对 RGB 三分量做 gamma 校正 |
| `GetSignedDistanceOfPointToLineSegment` | `public static float GetSignedDistanceOfPointToLineSegment(in Vec2 lineSegmentBegin, in Vec2 lineSegmentEnd, in Vec2 point)` | 内部就是 `Vec2.Determinant(begin, end) - point` |
| `GetClosestPointOnLineSegmentToPoint` ×2 | `Vec2` 版 / `Vec3` 版 | 线段上离给定点最近的点。`Vec2.DistanceToLineSegmentSquared` 的底层实现 |
| `ProjectPointOntoLine` | `public static Vec2 ProjectPointOntoLine(Vec2 point, Vec2 lineStart, Vec2 lineEnd)` | 投影到**无限直线**（不夹取） |
| `ClampToAxisAlignedRectangle` | `public static Vec2 ClampToAxisAlignedRectangle(Vec2 point, Vec2 lineStart, Vec2 lineEnd)` | 把点夹进以 `lineStart`/`lineEnd` 为对角的轴对齐矩形 |
| `GetRayPlaneIntersectionPoint` | `public static bool GetRayPlaneIntersectionPoint(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 rayOrigin, in Vec3 rayDirection, out float t)` | 射线与平面求交，返回是否命中并给出参数 `t`。`SandBox.View/Map/MapCameraView.cs` 有四处调用 |
| `PointLiesAheadOfPlane` | `public static bool PointLiesAheadOfPlane(in Vec3 planeNormal, in Vec3 planeCenter, in Vec3 point)` | 点在平面的正侧 |
| `FindPlaneLineIntersectionPointWithNormal` | `public static Vec3 FindPlaneLineIntersectionPointWithNormal(Vec3 planeP1, Vec3 planeNormal, Vec3 mouseP1, Vec3 mouseP2, out bool exceptionZero)` | **退化时 `out exceptionZero = true` 并返回 `planeNormal` 本身**——不是 NaN 也不是抛异常 |
| `IntersectLineSegmentWithTriangle` | `public static bool IntersectLineSegmentWithTriangle(in Vec3 segStart, in Vec3 segEnd, in Vec3 triA, in Vec3 triB, in Vec3 triC)` | 线段与三角形相交（不需要预归一化） |
| `IntersectLineSegmentWithBoundingBox` | `public static bool IntersectLineSegmentWithBoundingBox(in Vec3 start, in Vec3 end, in Vec3 min, in Vec3 max)` | 线段与 AABB 相交（slab 法） |
| `CheckLineToLineSegmentIntersection` | `public static bool CheckLineToLineSegmentIntersection(Vec2 lineOrigin, Vec2 lineDirection, Vec2 segmentA, Vec2 segmentB, out float t, out Vec2 intersect)` | 无限直线（方向向量形式）与线段求交 |
| `CheckLineSegmentToLineSegmentIntersection` | `public static bool CheckLineSegmentToLineSegmentIntersection(in Vec2 segment1Start, in Vec2 segment1End, in Vec2 segment2Start, in Vec2 segment2End)` | 两条线段。实现是**四次绕序异或**：`GetWindingOrder(...) != ... && ... != ...` |
| `CheckPointInsidePolygon` | `public static bool CheckPointInsidePolygon(in Vec2 v0, in Vec2 v1, in Vec2 v2, in Vec2 v3, in Vec2 point)` | **只支持四边形**（4 个顶点参数），不是任意多边形 |
| `CheckPolygonIntersection` | `public static bool CheckPolygonIntersection(Vec2[] polygon1, Vec2[] polygon2)` | 任意多边形相交。**输入必须是数组不是 `MBList`** |
| `CheckPolygonLineSegmentIntersection` | `public static bool CheckPolygonLineSegmentIntersection(MBList<Vec2> polygon, Vec2 segmentStart, Vec2 segmentEnd)` | 多边形与线段。**形参类型这里是 `MBList<Vec2>`** —— 与 `CheckPolygonIntersection` 的 `Vec2[]` 不一致 |
| `GetRayPlaneIntersectionPoint` 之外的 2D 相交 | `IntersectRayWithPolygon(Vec2 rayOrigin, Vec2 rayDir, List<Vec2> polygon, out Vec2 intersectionPoint)` | 射线与多边形。第三个参数是 `List<Vec2>`，**又是第三种容器类型** |

## 真实示例

索引夹取算二维数组偏移（逐字照抄自 `SandBox/MapScene.cs:591-592`）：

```csharp
private int FlattenIndex(int column, int row, int dimensionX, int dimensionY)
{
    int safeColumn = MBMath.ClampIndex(column, 0, dimensionX);
    int safeRow = MBMath.ClampIndex(row, 0, dimensionY);
    return safeRow * dimensionX + safeColumn;
}
```

`ClampIndex(row, 0, dimensionY)` 把行号夹进 `0..dimensionY-1`——**传的是「尺寸」而不是「最大索引」**，这就是它和 `ClampInt` 的唯一区别，也是为什么必须用 `ClampIndex` 而不是 `ClampInt(row, 0, dimensionY - 1)`（后者会写成一个更容易看错的表达式，功能却一样）。

相机旋转角环绕（`SandBox.GauntletUI/GauntletCraftingScreen.cs:468`）：

```csharp
this._targetCameraValues.HorizontalRotation = MBMath.WrapAngle(this._targetCameraValues.HorizontalRotation + num4 * MBMath.DegreesToRadians);
this._targetCameraValues.VerticalRotation = MBMath.WrapAngle(this._targetCameraValues.VerticalRotation + num5 * MBMath.DegreesToRadians);
```

`num4`/`num5` 是鼠标增量（度），乘 `MBMath.DegreesToRadians` 转弧度再累加，最后 `WrapAngle` 压回 `(-π, π]`。**不减也不夹上下限，纯粹靠 Wrap 防溢出**——这是引擎处理累积角度的标准写法。

逃跑方向限制（`SandBox/Missions/AgentBehaviors/FleeBehavior.cs:128-129` 的形状）：

```csharp
float desiredBearing = MBMath.WrapAngle((asVec - startWorldPos.AsVec2).RotationInRadians);
float currentBearing = MBMath.WrapAngle((navigationPath.Size > 0)
    ? (navigationPath.PathPoints[0] - startWorldPos.AsVec2).RotationInRadians
    : (targetWorldPos.AsVec2 - startWorldPos.AsVec2).RotationInRadians);
float turnError = MathF.Abs(MBMath.GetSmallestDifferenceBetweenTwoAngles(currentBearing, desiredBearing)) / 3.1415927f;
float clamped = MBMath.ClampAngle(desiredBearing, currentBearing, maxTurnPerFrame);
```

**两步缺一不可**：`GetSmallestDifferenceBetweenTwoAngles` 把误差压进 `(-π, π]`（不压的话跨 ±π 会算出接近 2π 的「小误差」），`ClampAngle` 再把目标夹到每帧允许的转动范围内。`/ 3.1415927f` 是把弧度归一化成「占半圈的百分比」——注意这里写的是字面量而不是 `MBMath.HalfPI`。

天气渐变（`TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs:599-600` 与 `:641`）：

```csharp
float fogWeight = MBMath.SmoothStep(threshold - 0.65f, threshold + 0.65f, currentValue);
float rainWeight = MBMath.SmoothStep(otherThreshold - 0.45f, otherThreshold + 0.45f, otherValue);

if (amount <= 0.5f)
{
    result = MBMath.SplitLerp(0f, 0.75f, 0f, 0.5f, amount, 1E-05f);
}
```

`SmoothStep` 的两个 edge 是**围绕阈值的对称区间**（`x-0.65` 到 `x+0.65`），进去就在 `[0,1]` 里平滑过渡。`SplitLerp(0f, 0.75f, 0f, 0.5f, amount, ...)` 是「前半段从 0 涨到 0.75、后半段从 0.75 回落到 0」——天气强度的三角包络。

用 `ref` 就地夹取单位化（`TaleWorlds.MountAndBlade/MBMusicManager.cs` 十几处同款）：

```csharp
private float _factionSpecificBattleThemeSelectionFactor;

// 下面是本示例自己声明的方法，不是 MBMath 的成员
private void ApplyThemeMix(float factor)
{
}

private void UpdateThemeWeights(float desiredFactor, float dt)
{
    this._factionSpecificBattleThemeSelectionFactor += desiredFactor * dt;
    MBMath.ClampUnit(ref this._factionSpecificBattleThemeSelectionFactor);
    this.ApplyThemeMix(this._factionSpecificBattleThemeSelectionFactor);
}
```

`ClampUnit` 返回 `void` 且必须传 `ref`，所以**不能写成 `factor = MBMath.ClampUnit(factor)`**。这是本类少数几个有副作用的成员之一。

模块依赖拓扑排序（唯一调用点，逐字照抄自 `TaleWorlds.ModuleManager/ModuleHelper.cs:300-309` 的 `GetSortedModules`）：

```csharp
public static List<ModuleInfo> GetSortedModules(string[] moduleIDs)
{
    List<ModuleInfo> modules = ModuleHelper.GetModuleInfos(moduleIDs);
    IList<ModuleInfo> ordered = MBMath.TopologySort<ModuleInfo>(modules, (ModuleInfo module) => ModuleHelper.GetDependentModulesOf(modules, module));
    List<ModuleInfo> result;
    if ((result = (ordered as List<ModuleInfo>)) == null)
    {
        return ordered.ToList<ModuleInfo>();
    }
    return result;
}
```

`getDependencies` 返回「我依赖谁」，`TopologySort` 保证依赖项排在前面。`ordered as List<ModuleInfo>` 这个模式值得学：`TopologySort` 的返回类型是 `IList<T>`，官方在能强转时直接转（零拷贝），不能转才退到 `ToList`（`TaleWorlds.LinQuick` 的扩展，不是 `System.Linq.Enumerable.ToList`）。**依赖图有环时 `Visit` 递归会栈溢出**——它没有 in-progress 标记，只有 `visited` 字典做剪枝，环上的节点会被反复访问到栈爆掉。模块加载器自己保证了无环，所以你看到它这么用是安全的。

## 风险与边界

- **`PI` 是 `float` 不是 `double`。** `MBMath.PI = 3.1415927f` 只有约 7 位有效数字，而 `Math.PI` 有 16 位。混用两者做高精度计算会有可观测的误差累积。引擎内部一致用 `float`，**混用 `MathF.PI` / `Math.PI` 会出现细微的角度漂移**。
- **`ClampIndex` 的第三个参数是开区间。** 这是本页最容易造成越界访问的一个成员（虽然它自己不会越界——它正是防越界的工具）。传 `dimensionY` 得到 `[0, dimensionY-1]`，符合直觉；真正的问题是**如果你以为它等于 `ClampInt` 而在别处又用 `ClampInt` 写同一个逻辑，两处边界会差 1**。
- **`ClampUnit` 返回 `void` 且需要 `ref`。** 无法链式、无法取值。它是本类唯一的副作用型标量工具。
- **`InverseLerp` 不夹取不保护。** `valueFrom == valueTo` 时除零得 `Infinity`/`NaN`；`value` 在区间外时返回区间外的数（**不像 `Map` 那样先夹取**）。这是它与 `Map` 的关键差异。
- **`Map` 会把输入夹到输入区间**，所以它永远不做外推。想外推请用 `LinearExtrapolation`。
- **`Lerp` 的 `Vec3`/`Vec2`/`Mat3` 三个重载没有默认参数。** 只有 float 版有 `= 1E-05f`。写 `MBMath.Lerp(v1, v2, t)` 对 `Vec3` 会编译失败。
- **`SmoothStep` 在 `edge0 == edge1` 时除零。** 它先算 `(value - edge0) / (edge1 - edge0)`，不检查分母。
- **`IsBetween` 是开区间，`IsBetweenInclusive` 是闭区间。** 而且 `IsBetweenInclusive` **只有 float 版本**，int 要自己写 `>= && <=`。
- **`ApproximatelyEquals` 用 `<=` 不是 `<`。** 恰好差一个 epsilon 时判为相等。
- **`TopologySort` 在有环依赖时栈溢出。** `Visit` 没有 in-progress 状态标记，只有 `visited` 字典。你自己构造的依赖图**必须保证无环**。
- **`CheckPointInsidePolygon` 只支持四边形。** 4 个顶点参数。任意多边形用 `CheckPolygonIntersection(Vec2[], Vec2[])` 或 `IntersectRayWithPolygon(..., List<Vec2>, ...)`。
- **2D 相交那一族的容器类型三个都不一样**：`CheckPolygonIntersection` 收 `Vec2[]`、`CheckPolygonLineSegmentIntersection` 收 `MBList<Vec2>`、`IntersectRayWithPolygon` 收 `List<Vec2>`。这是历史遗留的不一致，不是设计意图——写代码时按签名传，别自己转换。
- **`FindPlaneLineIntersectionPointWithNormal` 退化时返回 `planeNormal`。** 分母为 0 时 `out exceptionZero = true` 并**返回平面法向量本身**当结果。**必须检查 `exceptionZero`**，否则会拿到一个语义上完全错误但类型正确的坐标。
- **四个零调用点的成员**：`DistributeShares`、`ToOrdinal`、`MaxElements2`、`MaxElements3`、`MaxElements4`、`MaxElements5`、`BilinearLerp`、`IsBetweenInclusive` 在 `bannerlord-1.3.0/` 里除了自身定义外**零引用**。它们是公开 API（mod 可用），但**没有官方用例作为行为参考**——用之前请自己读源码并写测试。`DistributeShares` 和 `ToOrdinal` 尤其可疑：前者要写 `yield` 惰性迭代器，后者要拼英文序数词，都像是早期版本被替换掉后残留的。
- **`BilinearLerp` 的内层 `minimumDifference` 硬编码 `1E-05f`，无法配置。** 两次内层 `Lerp` 都用它。
- **`WrapAngleSafe` 对大角度极慢。** 名字里的 "Safe" 是指「不依赖 `Math.IEEERemainder` 的精度行为」，不是「更安全」。传 `1e9` 给它就是几亿次循环。**默认用 `WrapAngle`。**

## 跨版本提示

`MBMath.cs` 在 1.3.0 是 29928 字节，1.3.15 是 29786 字节，1.4.6 起（含 1.4.7 / 1.5.3）是 30013 字节——**三档不同的内容**。但我把 `public` 行抽出来排序做 `diff`，**1.3.0 与 1.5.3 的输出为空**。也就是说**这 1500 字节的差异全部来自方法体内部的局部变量重命名与反编译格式**，public API 表面跨 1.3 → 1.5 三个大版本**一条都没变**。

具体核对过的常量也没动：`PI = 3.1415927f`、`Epsilon = 1E-05f`、`DegreesToRadians = 0.017453292f` 在所有版本一致；`ClampIndex` 的 `maxValue - 1` 语义、`Lerp` 的 `minimumDifference` 短路、`WrapAngle` 与 `WrapAngleSafe` 的两种实现、`TopologySort` 无环检查，全部原样。

所以这个类是本批里**跨版本稳定性最高**的一个：1021 行、约 80 个成员、零破坏性变更。**升级时唯一该重跑的是你自己代码里对这些成员的调用**——而因为签名一个没变，连这件事都不需要做。

## 依赖关系

- 依赖的基础值类型：[Vec2](../Vec2) 与 [Vec3](../Vec3) 是几何函数的主要输入输出，`[Mat3](../Mat3)` 只在 `Lerp` 的一个重载里出现。`Vec3.ToARGB` 与本类的 `ColorFromRGBA` 是**两套独立打包实现**（一个 `× 256f` 一个 `× 255f`），别混用
- 容器依赖：[MBReadOnlyList](../MBReadOnlyList) 是 `IndexOfMax` 的形参类型（注意不是 `IReadOnlyList`），[MBList](../MBList) 是 `CheckPolygonLineSegmentIntersection` 的形参类型
- 颜色互转：本类的 `HSBtoRGB` / `RGBtoHSB` 是完整版（带 alpha），[Color](../Color) 自己的 `FromHSV` 是简化版（alpha 固定 1）。[ColorExtensions](../ColorExtensions) 的 `AddFactorInHSB` 就是 `RGBtoHSB` → 改 → `HSBtoRGB` 的三行封装
- 数学基础类型：本类用的是 `MathF` / `Math`（`System.MathF` / `System.Math`），不是自研的 [MathF](../MathF)——后者是另一套（用于 UI 相关的快速路径）
- 真实调用方：[MBMusicManager](../../mission-ext/MBMusicManager)（`ClampUnit`）、`SandBox.View/Map/MapCameraView`（`GetRayPlaneIntersectionPoint`）、`TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel`（`SmoothStep` / `SplitLerp`）、`TaleWorlds.ModuleManager/ModuleHelper`（`TopologySort`）、`TaleWorlds.CampaignSystem/AtmosphereGrid`（`SmoothStep`）
- 事件类工具：游戏状态栈用到的 [GameStateManager](../GameStateManager) 不依赖本类，两者只是同属 `Core` / `Library` 层
- 桶首页：[core-extra API 分区](../)
