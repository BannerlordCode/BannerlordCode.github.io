---
title: "Vec2"
description: "Bannerlord 大地图/平面数学的通用二维向量 struct：长度、归一化、绕序判定、线段距离与坐标系旋转，角度以 +Y 为零、顺时针为正，靠 RotationInRadians 与 FromRotation 这一对互逆成员表达。"
---

# Vec2

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec2`
**Base:** 无（`System.ValueType`；不实现 `IEquatable<Vec2>`，与整数版 [Vec2i](../Vec2i) 不同）
**File:** `TaleWorlds.Library/Vec2.cs`（全文 475 行 / 13393 字节）

## 概述

`Vec2` 是**平面（俯视地图）数学**的主力类型。`Settlement.Position` 是它，`MobileParty.Position` 是它，AI 寻路、单位之间的方位判定、鼠标与地图的交点计算都用它。三维版本是 [Vec3](../Vec3)，两者**没有继承关系**，方法名有一批同名但语义相近的（`Distance`、`Length`、`Lerp`、`Slerp`、`NearlyEquals`），迁移时要逐个确认。

`Vec2` 与 [Vec3](../Vec3) 最容易混淆的一点是**角度约定**。看两个成员就全清楚了：

```csharp
public float RotationInRadians { get { return MathF.Atan2(-this.x, this.y); } }
public static Vec2 FromRotation(float rotation) { return new Vec2(-MathF.Sin(rotation), MathF.Cos(rotation)); }
```

`Atan2(-x, y)` 意味着**零度指向 +Y，正角度朝 -X，也就是顺时针**。这不是数学惯例（标准是 `Atan2(y, x)`，逆时针），而是跟着大地图的「北上南下」视觉约定走的。引擎里所有角度计算都建立在这对互逆成员上，`Vec2.FromRotation(0f)` 得到 `(0, 1)` 不是 `(1, 0)`。

## 心智模型

把 `Vec2` 当成**「一个方向 + 一个距离」**的复合值，四个用途覆盖了 95% 的使用。

**方向用途 —— 归一化。** `Normalize()` 是唯一会改自身的归一化入口：`float length = this.Length; if (length > 1E-05f) { this.x /= length; this.y /= length; } else { this.x = 0f; this.y = 1f; }`。**注意退化分支返回 `(0, 1)` 而不是 `(0, 0)`** —— 零向量归一化后指向正北，这样「方向」不会变成「没有方向」。它返回归一化**前**的长度，所以 `vec.Normalize()` 顺手就拿到了原长度。不想改自身就用 `Normalized()`（内部 `Vec2 result = this; result.Normalize(); return result;`）。`IsNonZero()` 告诉你该不该归一化。

**距离用途 —— `Distance` / `LengthSquared` / `DistanceSquared`。** 判断远近一律用平方版本再比较平方阈值，这是引擎全树的习惯：`Campaign.Behaviors.BanditSpawnCampaignBehavior.cs:587` 写的是 `campaignVec.DistanceSquared(MobileParty.MainParty.Position) < this._radiusAroundPlayerPartySquared`，字段名 `...Squared` 就是约定信号。只有要真实米数时才开 `MathF.Sqrt`。

**几何用途 —— 线段距离与绕序。** `DistanceToLineSegment` / `DistanceSquaredToLineSegment` 都带一个 `out Vec2 closestPointOnLineSegment`——既给距离又给投影点，一次算完。`GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)` 返回 `WindingOrder`（`None`/`Cw`/`Ccw`，**这是全局命名空间的枚举，不在 `TaleWorlds.Library` 下**），内部就是 `CCW(third - second, second - first)` 的符号判定：`> 0 → Ccw`，`< 0 → Cw`，`== 0 → None`（三点共线）。`MBMath.CheckLineSegmentToLineSegmentIntersection` 就是拿四次绕序结果做异或判定。

**坐标系用途 —— `TransformToLocalUnitF` 这一族。** `Vec2` 作为帧（frame）的方向轴时，`this` 就是那条 forward 轴。`a.TransformToLocalUnitF(v)` 把世界向量 `v` 转成以 `a` 为 forward 的局部坐标。这族有 4 个成员：`TransformToLocalUnitF` / `TransformToParentUnitF` / `TransformToLocalUnitFLeftHanded` / `TransformToParentUnitFLeftHanded`，逐字读源码会发现 `TransformToParentUnitFLeftHanded` 的方法体与 `TransformToLocalUnitFLeftHanded` **完全相同**（都是 `new Vec2(-this.y * a.x + this.x * a.y, this.x * a.x + this.y * a.y)`）——这是一个真实的源码重复，不是笔误也不是文档问题，见「风险与边界」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `x` / `y` | `public float x;` / `public float y;` | **public 字段**，不是属性。`Vec3` 同时有 `public float X { get; set; }` 和 public 字段 `x`，`Vec2` 只有字段。序列化器和 `Vec2.Parse` 风格的代码依赖字段直写 |
| `X` / `Y` | `public float X { get; set; }` / `public float Y { get; set; }` | 大写别名属性，引擎里两种写法混用。改 `x` 和改 `X` 效果完全相同（属性就是字段的包装） |
| 构造函数 ×4 | `Vec2(float a, float b)` / `Vec2(Vec2 v)` / `Vec2(Vector2 v)` | `Vec2(Vec2 v)` 对结构体来说是冗余的复制构造，但它存在是为了给隐式转换当候选。参数名是 `a`/`b` 而不是 `x`/`y`——1.3.0 源码原样 |
| `ToVec3` | `public Vec3 ToVec3(float z = 0f)` | 升维。`z` 默认 0，`w` 传 `-1f`（表示「无值」）。`Vec3` 的 `AsVec2` 是降维，方向不对称 |
| `implicit operator Vec2` | `public static implicit operator Vec2(Vector2 v)` | 从 `UnityEngine.Vector2` 隐式转入。`TaleWorlds.Library` 里有一层 Unity 兼容 |
| `explicit operator Vector2` | `public static explicit operator Vector2(Vec2 vec2)` | **转出是显式的**，必须写 `(Vector2)vec2`。为什么不对称？因为引擎内部计算全用 `Vec2`，只有真正交给 Unity 渲染层时才转，显式转换强迫你确认这是边界 |
| `Normalize` | `public float Normalize()` | 就地归一化，返回**原长度**。长度 ≤ 1E-05 时退化为 `(0, 1)` |
| `Normalized` | `public Vec2 Normalized()` | 不改自身，返回归一化副本 |
| `ClampMagnitude` | `public void ClampMagnitude(float min, float max)` | 把长度限制到 `[min, max]`。实现是 `float value = this.Normalize(); this *= MathF.Clamp(value, min, max);`——**先归一化再乘回**，所以 `min > 0` 时方向被保留 |
| `Length` / `LengthSquared` | `public float Length { get; }` / `public float LengthSquared { get; }` | 前者 `MathF.Sqrt(x*x + y*y)`，后者免开方。**属性不是方法** |
| `RotationInRadians` | `public float RotationInRadians { get; }` | `Atan2(-x, y)`。零度朝 +Y，正方向顺时针（朝 -X） |
| `FromRotation` | `public static Vec2 FromRotation(float rotation)` | `new Vec2(-Sin(r), Cos(r))`。与上面那个属性互逆：`v.FromRotation(v.RotationInRadians)` 回到原向量 |
| `DotProduct` | `public float DotProduct(Vec2 v)`（实例）/ `public static float DotProduct(Vec2 va, Vec2 vb)`（静态） | 两个同名重载，一实例一静态。静态版供 [MBMath](../MBMath) 等容器代码调用 |
| `CCW` | `public static float CCW(Vec2 va, Vec2 vb)` | 二维叉积 `va.x*vb.y - va.y*vb.x`。名字的 CCW 表示「逆时针时为正」，这是本类型里判定绕序的底层原语 |
| `Determinant` | `public static float Determinant(in Vec2 vec1, in Vec2 vec2)` | 与 `CCW` **完全相同的公式**，只是名字不同。`MBMath.GetSignedDistanceOfPointToLineSegment` 调的是它 |
| `GetWindingOrder` | `public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)` | 三点定绕序，返 `WindingOrder`（全局命名空间枚举）。`None` 表示共线 |
| `DistanceToLineSegment` | `public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)` | 到**线段**的距离，`out` 顺带返回最近点。内部先算 `DistanceSquaredToLineSegment` 再 `MathF.Sqrt` |
| `DistanceSquaredToLineSegment` | `public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)` | 同上但不方。参数 `v`/`w` 是线段两端点，`this` 是查询点。线段退化（`v == w`）时最近点返回 `v` |
| `DistanceToLine`（静态） | `public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)` | 到**无限直线**的距离（不投影夹取）。与上面的线段版本分开，是刻意的 |
| `DistanceToLineSegmentSquared`（静态） | `public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)` | 静态版走 `MBMath.GetClosestPointOnLineSegmentToPoint` |
| `NearlyEquals` | `public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)` | 逐分量比 epsilon。**参数无 `in` 修饰**（`Vec3.NearlyEquals` 有），跨类型比较时注意 |
| `IsUnit` | `public bool IsUnit()` | **是方法不是属性**：`length > 0.95 && length < 1.05`。而 `Vec3.IsUnit` 是**属性**且判的是 `LengthSquared` 在 `0.9801..1.0201`。同名不同形，容差也不同 |
| `IsNonZero` | `public bool IsNonZero()` | **是方法**。`Vec3.IsNonZero` 是属性 |
| `IsValid` | `public bool IsValid { get; }` | 属性。四个 NaN / Infinity 检查。`Vec2.Invalid` 就是全 NaN 的静态字段 |
| `RotateCCW` | `public void RotateCCW(float angleInRadians)` | 就地逆时针旋转。注意它逆时针，与 `RotationInRadians` 的顺时针正方向相反 |
| `RightVec` / `LeftVec` | `public Vec2 RightVec()` / `public Vec2 LeftVec()` | 取右手 / 左手法线：`RightVec()` 返回 `(y, -x)`，`LeftVec()` 返回 `(-y, x)`。都是方法 |
| `TransformToLocalUnitF` 一族 ×4 | `TransformToLocalUnitF(Vec2 a)` / `TransformToParentUnitF` / `TransformToLocalUnitFLeftHanded` / `TransformToParentUnitFLeftHanded` | 把 `a`（世界向量）在以 `this` 为 forward 轴的坐标系里做旋转。Local/Parent 是一对互逆，LeftHanded 是左手系版本 |
| `AngleBetween` | `public float AngleBetween(Vec2 vector2)` | `Atan2(叉积, 点积)`，返回**有符号**夹角。跟 [MBMath](../MBMath) 的 `GetSmallestDifferenceBetweenTwoAngles` 语义不同，后者处理 2π 环绕 |
| 静态常量 ×5 | `Side` / `Forward` / `One` / `Zero` / `Invalid` | 全是 `static readonly`。`Forward = (0, 1)`（不是 `(1, 0)`），`Invalid` 是 `(NaN, NaN)` |
| `Lerp` / `Slerp` | `public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)` / `public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)` | 线性/球面插值。`Slerp` 内部先 `ClampFloat` 点积到 `[-1, 1]` 再 `Acos` |
| 运算符 ×8 | `==` `!=` `+` `-`（两个）`*(Vec2,float)` `*(float,Vec2)` `/(float,Vec2)` `/(Vec2,float)` | `==` / `!=` 是**精确浮点相等**，不是近似。`/` 提供了两个参数顺序 |

## 真实示例

方向判定 + 归一化，逐字照抄自 `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs:583` 的判定逻辑形状：

```csharp
Vec2 attackerToVictim = (attackInformation.AttackerAgentPosition - attackInformation.VictimAgentPosition).AsVec2;
float facing = Vec2.DotProduct(attackerToVictim.Normalized(), attackInformation.VictimAgentMovementDirection);
if (facing < 0.174f)
{
    // 攻击者在受害者背后
}
```

`0.174f` 是 `cos(80°)`——引擎用点积阈值代替角度比较，因为点积省一次 `Acos`。`Normalized()` 不改原值，正是这里需要的语义。

按距离筛选地图实体（`SandBox/CampaignBehaviors/BanditSpawnCampaignBehavior.cs:587` 的形状）：

```csharp
private float _radiusAroundPlayerPartySquared = 30f * 30f;

public bool IsCloseEnough(MobileParty party)
{
    Vec3 partyPosition = party.Position;
    return partyPosition.DistanceSquared(MobileParty.MainParty.Position) < this._radiusAroundPlayerPartySquared;
}
```

阈值字段预先算好平方并以 `Squared` 结尾——每次比较省一次 `MathF.Sqrt`。

角度插值（`SandBox.View/Map/Visuals/SettlementVisual.cs:666` 的形状）：

```csharp
Vec2 shooterFacing = shooterGlobalFrame.rotation.f.AsVec2;
shooterGlobalFrame.rotation.f.AsVec2 = Vec2.FromRotation(rotationInRadians + (float)MathF.Sign(tiltAmount) * (tiltRange * 2f));
float newBearing = shooterFacing.RotationInRadians;
```

先 `RotationInRadians` 取角、再 `FromRotation` 造新向量——这对互逆成员是引擎里做角度插值的标准两步式。

绕序判定三角面朝向：

```csharp
WindingOrder order = Vec2.GetWindingOrder(corners[0], corners[1], corners[2]);
if (order == WindingOrder.Cw)
{
    Array.Reverse(corners);
}
else if (order == WindingOrder.None)
{
    Debug.Print("Degenerate triangle, skipping.");
    return;
}
```

`None` 不是「未知」而是「三点共线」——必须单独处理，否则退化三角形会以错误的朝向进入渲染管线。

自定义行为时保持与引擎一致的方向约定：

```csharp
public class MyPatrolMovement
{
    private Vec2 _currentFacing = Vec2.Forward;

    public void SteerToward(Vec2 target, float maxTurnRadians)
    {
        Vec2 direction = target - this._currentFacing;
        if (!direction.IsNonZero())
        {
            return;
        }
        float angleDifference = this._currentFacing.RotationInRadians - direction.Normalized().RotationInRadians;
        angleDifference = MBMath.WrapAngle(angleDifference);
        this._currentFacing = this._currentFacing.RotateCCW(-MathF.Min(MathF.Abs(angleDifference), maxTurnRadians) * MathF.Sign(angleDifference));
    }
}
```

`MBMath.WrapAngle` 把差值压回 `(-π, π]`，**不做这一步的话在跨越 ±π 时会整圈旋转**。注意最后一步的 `RotateCCW` 带负号——`RotateCCW` 是逆时针而 `RotationInRadians` 的正方向是顺时针，两者符号相反。

## 风险与边界

- **角度约定与数学惯例相反。** 零度是 +Y，正角是顺时针。`Vec2.FromRotation(MathF.PI)` 得到 `(0, -1)`（朝南），不是 `(-1, 0)`（朝西）。从别的库抄旋转公式过来一定要先转坐标：`mathAngle = MBMath.PI / 2f - engineAngle`。
- **`RotateCCW` 与 `RotationInRadians` 的符号相反。** 前者逆时针为正，后者顺时针为正。这个不一致在源码里是既成事实，调旋转时几乎每次都要手工加负号。
- **`TransformToParentUnitFLeftHanded` 与 `TransformToLocalUnitFLeftHanded` 方法体逐字符相同。** 都是 `new Vec2(-this.y * a.x + this.x * a.y, this.x * a.x + this.y * a.y)`。前者**没有实现 Local/Parent 的互逆关系**——如果你指望「转局部再转回父空间得到原向量」，这个成员会给你错误结果。绕开它：需要 Local→Parent 时用 `a.TransformToParentUnitF(v)`（非 LeftHanded 版），或手工推导。这是源码级事实，不是文档推断。
- **`==` 是精确浮点相等。** `operator ==` 是 `v1.x == v2.x && v1.y == v2.y`，没有 epsilon。比较计算出来的坐标要用 `NearlyEquals(v, epsilon)`。相关地，`GetHashCode` 是 `(int)(1001f * x + 10039f * y)`——**这是个极弱的哈希**，不同向量几乎必然碰撞，绝对不要把 `Vec2` 放进 `Dictionary` / `HashSet` 依赖它。`Equals` 也是精确比较，所以 `Equals` 与 `==` 一致，只是都没有容差。
- **`IsUnit` / `IsNonZero` / `RightVec` / `LeftVec` / `AngleBetween` 是方法，`Length` / `LengthSquared` / `RotationInRadians` / `IsValid` 是属性。** 而 `Vec3` 把 `IsUnit` / `IsNonZero` 做成了属性。两个类型不一致，`Vec2.IsUnit()` 写成 `Vec2.IsUnit` 会编译失败。
- **`IsUnit` 的容差是 `0.95..1.05`，比 `Vec3.IsUnit` 宽。** 而且 `Vec3` 判的是 `LengthSquared`（等价于 `0.99..1.01` 的长度），`Vec2` 判的是 `Length`。跨类型迁移时容差行为会变。
- **`Normalize()` 会改自身，且零向量退化为 `(0, 1)`。** 对副本调用是安全的（结构体），但把它写进字段就会静默改状态。返回值是**归一化前**的长度——想拿长度请先读 `Length`。
- **`x` 与 `X` 两套命名指向同一份存储。** 混用不会出错但会让人读不懂你的代码；跨模块对接时跟随对方写法。
- **`Vec2.Parse` 不存在。** `Vec3` 有 `public static Vec3 Parse(string input)`（逗号分隔、3~4 段），`Vec2` **没有**对应方法。需要从字符串读 `Vec2` 得自己 `float.Parse` 拆。这是从 `Vec3` 迁过来最容易发现的缺口。
- **`DistanceToLine` 与 `DistanceToLineSegment` 是两件事。** 前者是到无限直线的距离（不夹取投影点），后者会夹到线段端点。查询点在延长线上时两者结果不同，别用错。
- **`DistanceSquaredToLineSegment` 的 `out` 参数在退化情况下也有值。** 当 `v == w`（线段塌成一个点）时 `closestPointOnLineSegment = v`，距离是 `|this - v|`，不抛异常。
- **`Slerp` 假设两端向量已归一化。** 它算 `end - start * dot(start, end)` 再 `Normalize()` 当作正交分量，如果输入没归一化，长度不是 1 时结果不可预测。先各自 `Normalized()`。
- **左/右手系数不对称。** `explicit operator Vector2` 是显式、`implicit operator Vec2` 是隐式。这个不对称是有意的（引擎内算、渲染层才转），别为了「方便」改成双向隐式。

## 跨版本提示

`Vec2.cs` 在 1.3.0 是 13393 字节，1.3.15 起到 1.5.3 都是 **13396 字节**，差的 3 字节是格式化差异。**public 成员集合跨 1.3 → 1.5 三个大版本逐条等价**——我把两版的 `public` 行各抽出来排序做 `diff`，输出为空：4 个构造函数、全部运算符、`Normalize`/`Normalized`/`ClampMagnitude`/`GetWindingOrder`/`CCW`/`Determinant`、四个 `TransformTo...`、五个静态常量、一个角属性一个角工厂，全都没变。

包括那个重复实现——`TransformToParentUnitFLeftHanded` 与 `TransformToLocalUnitFLeftHanded` 的重复在 1.5.3 里同样存在。**所以这个坑不会因为升级而修好，也不会变得更深。** 真正的升级风险不在 `Vec2` 自身，而在依赖它签名的外部代码：`Mission.GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)` 这类签名如果哪版改了坐标语义，是 mod 编译期才发现的事。

## 依赖关系

- 三维对应：[Vec3](../Vec3) 与本类无继承关系但方法名大量重合；降维是 `Vec3.AsVec2` 属性，升维是本类的 `ToVec3(float z = 0f)`
- 整数对应：[Vec2i](../Vec2i) 实现了 `IEquatable<Vec2i>`，`Vec2` 没有实现任何接口——网格/索引场景用 `Vec2i`，连续量用本类
- 容器与聚合：[MatrixFrame](../MatrixFrame) 的 `origin`/`rotation` 承载 Vec3，`AsVec2` 是降维入口
- 数学库：[MBMath](../MBMath) 提供 `WrapAngle` / `GetSmallestDifferenceBetweenTwoAngles` / `GetSignedDistanceOfPointToLineSegment` / `GetClosestPointOnLineSegmentToPoint`，是本类几何成员的实际调用方与外部依赖
- 绕序枚举的消费者：`WindingOrder` 是全局命名空间枚举（不在 `TaleWorlds.Library` 下），由 `Vec2.GetWindingOrder` 与 `MBMath.CheckLineSegmentToLineSegmentIntersection` 共用
- 引擎 API 入口：`Mission.GetNearbyAgents` 的中心参数与 `Agent.Position.AsVec2` 是本类型最常见的两个来源
- 桶首页：[core-extra API 分区](../)
