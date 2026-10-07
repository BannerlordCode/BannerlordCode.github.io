---
title: "Vec3"
description: "引擎的三维向量 struct：x/y/z 参与全部数学运算，第四个分量 w 默认 -1f 表示「未设置」且被 DotProduct/Length/Normalize 完全忽略；ToARGB 把它映射成 alpha，Parse 从 XML 属性读回。"
---

# Vec3

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec3`
**Base:** 无（`System.ValueType`；不实现任何接口）
**File:** `TaleWorlds.Library/Vec3.cs`（全文 749 行 / 20150 字节；文件尾部还嵌套了一个 `public struct StackArray8Vec3`）

## 概述

`Vec3` 是引擎全部三维运算的载体：`Agent.Position`、`MatrixFrame.origin`、`AgentLookDirection`、`Settlement` 的空间位置、物品 XML 里的位置偏移，都是它。源码 749 行里 public 成员超过 70 个，是本桶里最大的单个类型。

它最反直觉的设计是**第四个分量 `w`**。四个构造函数全部把 `w` 默认成 `-1f`，只有六个地方读它：

```
this.w = w;                    ← 4 个构造函数
case 3: return this.w;         ← 索引器
case 3: this.w = value;        ← 索引器 setter
... this.w && ...              ← IsValidXYZW
uint a = (uint)(this.w * 256f) ← ToARGB
```

**`DotProduct`、`Length`、`Normalize`、`Distance`、`CrossProduct`、`Lerp`、`Equals`、`GetHashCode` 一个都不碰 `w`。** 所以心智模型是：**`Vec3` 是一个三维向量，外加一个跟数学运算无关的第四个槽位，`-1f` 是「这个槽位没值」的哨兵。** 那第六个读取点 `ToARGB` 是唯一把它当数据用的地方（映射成 alpha 通道）。

## 心智模型

四组成员，覆盖了「方向 / 距离 / 旋转 / 数据往返」四类需求。

**第一组：静态几何运算。** `DotProduct` / `CrossProduct` / `Vec3Max` / `Vec3Min` / `Abs` / `ElementWiseProduct` / `ElementWiseDivision`。名字要注意两个不对称：min/max 的静态方法叫 **`Vec3Max` / `Vec3Min`**（带类型前缀），而 `Vec2` 上叫 `Max` / `Min`；而 `CrossProduct` 存在**三个**入口——静态 `Vec3.CrossProduct(va, vb)`、实例 `vec.CrossProductWithUp()`（固定拿 `Up` 叉乘）、以及 `MBMath` 里的几何函数。`ElementWiseProduct` 是逐分量乘（不是张量积），沙盒里用来算逐轴的伤害或速度缩放。

**第二组：实例变换（部分就地、部分返回新值）。** 这一组是最容易写错的地方，因为**命名约定不一致**：

- `Normalize()` / `ClampMagnitude(min, max)` / `RotateAboutX(a)` / `RotateAboutY(a)` / `RotateAboutZ(a)` / `NormalizeWithoutChangingZ()` —— **就地修改 `this`，返回 `void` 或原长度**
- `NormalizedCopy()` / `ClampedCopy(min, max)` / `ClampedCopy(min, max, out bool valueClamped)` / `RotateVectorToXYPlane()` / `Reflect(normal)` / `ProjectOnUnitVector(ov)` / `RotateAboutAnArbitraryVector(vec, a)` —— **返回新向量，`this` 不变**

`Normalized()` 在 [Vec2](../Vec2) 上存在，但 `Vec3` 上**没有**，只有 `NormalizedCopy()`。从 `Vec2` 迁过来会编译失败。

**第三组：`ClampMagnitude` 与 `ClampedCopy` 名字像、行为完全不同。** `ClampMagnitude(min, max)` 限制的是**向量长度**：`float value = this.Normalize(); this *= MathF.Clamp(value, min, max);`——先归一化再乘回，所以长度被压进区间、方向保留。`ClampedCopy(min, max)` 限制的是**每个分量**：`vec.x = MathF.Clamp(vec.x, min, max); vec.y = ...; vec.z = ...;`——三个轴各自独立夹取，总长度可能超过 `max`。带 `out bool valueClamped` 的重载会在任何分量被夹过时置 `true`。**这两个函数没有互换关系。**

**第四组：旋转角与序列化。** `RotationZ` 是 `MathF.Atan2(-this.x, this.y)`——**和 `Vec2.RotationInRadians` 完全一样的约定**（零度 +Y、顺时针为正）。`RotationX` 是 `MathF.Atan2(this.z, MathF.Sqrt(this.x * this.x + this.y * this.y))`。三者转动：`RotateAboutX/Y/Z` 就地，`RotateAboutAnArbitraryVector(vec, a)` 绕任意轴返回新向量（内部是罗德里格斯旋转公式展开成 27 项乘加，不调 `Quaternion`）。`Vec3.Parse(string)` 是 XML 数据读回的唯一入口——先 `input.Replace(" ", "")` 再按 `,` 切分，**段数必须 3 或 4，否则 `throw new ArgumentOutOfRangeException()`**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `x` / `y` / `z` / `w` | `public float x;` `public float y;` `public float z;` `public float w;` | **public 字段**。`w` 默认 `-1f`。XML 序列化器与 `Parse` 依赖字段直写 |
| `X` / `Y` / `Z` / `W` | `public float X { get; set; }` 等四个 | 大写属性别名，与字段同一份存储。两种写法在树里混用 |
| 构造函数 ×4 | `Vec3(float x = 0f, float y = 0f, float z = 0f, float w = -1f)` / `Vec3(Vec3 c, float w = -1f)` / `Vec3(Vec2 xy, float z = 0f, float w = -1f)` / `Vec3(Vector3 vector3)` | 全部把 `w` 默认成 `-1f`。第三个是 `Vec2` → `Vec3` 的升维路径，第四个从 `UnityEngine.Vector3` 转入 |
| 索引器 | `public float this[int i]`（可读可写） | `0..3` 映射到 `x/y/z/w`，**其它任何值 `throw new IndexOutOfRangeException("Vec3 out of bounds.")`**。给循环用；`indexer[i]` 传 4 会炸 |
| `AsVec2` | `public Vec2 AsVec2 { get; set; }` | **property，且有 setter**。getter 返回 `new Vec2(this.x, this.y)`；setter 只写 `x`/`y`，**不动 `z`**。所以 `frame.rotation.f.AsVec2 = Vec2.FromRotation(r)` 合法，但 `z` 保持原值 |
| `ToString` / `ToString(format)` | `public override string ToString()` / `public string ToString(string format)` | 无参版输出 `(x, y, z)`——**不含 `w`**。带 format 版逐分量 `ToString(format)`，是 `MBMath` 之外的日志格式化入口 |
| `Parse` | `public static Vec3 Parse(string input)` | 读 XML 属性。去掉所有空格 → 按 `,` 切 → 段数 3 或 4，否则 `ArgumentOutOfRangeException`。4 段时 `array[3]` 才是 `w`，3 段时 `w = -1f` |
| `Length` / `LengthSquared` | `public float Length { get; }` / `public float LengthSquared { get; }` | 属性。开方 / 不开方 |
| `IsValid` / `IsValidXYZW` | `public bool IsValid { get; }` / `public bool IsValidXYZW { get; }` | **两个属性**。`IsValid` 查 `x/y/z`，`IsValidXYZW` **多查一个 `w`**。`Vec3.Invalid` 是全 NaN，所以两个都是 `false` |
| `IsUnit` / `IsNonZero` | `public bool IsUnit { get; }` / `public bool IsNonZero { get; }` | **是属性**（`Vec2` 上同名成员是方法）。`IsUnit` 判 `LengthSquared` 在 `0.98010004f..1.0201f`（等价长度 `0.99..1.01`） |
| `Normalize` | `public float Normalize()` | 就地归一化，返回**原长度**。长度 ≤ `1E-05f` 时三个分量全置 0（`Vec2` 在同样条件下退化成 `(0, 1)`，两者行为不同） |
| `NormalizedCopy` | `public Vec3 NormalizedCopy()` | `Vec3 result = this; result.Normalize(); return result;`。**`Vec2` 上叫 `Normalized()`，`Vec3` 上没有 `Normalized()`** |
| `ClampMagnitude` | `public void ClampMagnitude(float min, float max)` | 夹**长度**（先归一再乘回），就地修改 |
| `ClampedCopy` ×2 | `public Vec3 ClampedCopy(float min, float max)` / `public Vec3 ClampedCopy(float min, float max, out bool valueClamped)` | 夹**每个分量**，返回新向量。`out` 版告诉你是否真的夹过 |
| `NormalizeWithoutChangingZ` | `public void NormalizeWithoutChangingZ()` | 只把 `x`/`y` 归一化到 `sqrt(1 - z²)`，用于「方向 + 俯仰」的分解表示。`z` 先被 `ClampFloat(z, -0.99999f, 0.99999f)` |
| `CrossProduct`（静态） | `public static Vec3 CrossProduct(Vec3 va, Vec3 vb)` | 叉积 |
| `CrossProductWithUp` | `public Vec3 CrossProductWithUp()` | `new Vec3(this.y, -this.x, 0f, -1f)`——等价于 `CrossProduct(Up, this)`，返回新值 |
| `Vec3Max` / `Vec3Min` | `public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)` / `Vec3Min` | 逐分量取大/取小。**名字带类型前缀**（`Vec2` 上是 `Max`/`Min`） |
| `DotProduct` | `public static float DotProduct(Vec3 v1, Vec3 v2)` | 点积，忽略 `w` |
| `Lerp` / `Slerp` | `public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)` / `Slerp(Vec3 start, Vec3 end, float percent)` | 线性/球面插值。两者都**丢掉 `w`**（结果是 `new Vec3(..., -1f)`） |
| `Distance` / `DistanceSquared` | `public float Distance(Vec3 v)` / `DistanceSquared(Vec3 v)` | 实例方法。比较远近用平方版 |
| `AngleBetweenTwoVectors` | `public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)` | `Acos(Clamp(dot / (len1*len2), -1, 1))`。**每次调用开两次方** |
| `RotateAboutX/Y/Z` | `public void RotateAboutX(float a)` 等三个 | **就地**绕世界轴旋转，内部 `MathF.SinCos` |
| `RotateAboutAnArbitraryVector` | `public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)` | 绕任意轴 `vec` 旋转 `a` 弧度，返回新向量。**`this` 不变**。轴不做归一化（公式自带轴长平方补偿） |
| `RotateVectorToXYPlane` | `public Vec3 RotateVectorToXYPlane()` | 保留长度、压平到 XY 平面（`z = 0` 后归一化再乘回原长度） |
| `Reflect` / `ProjectOnUnitVector` | `public Vec3 Reflect(Vec3 normal)` / `ProjectOnUnitVector(Vec3 ov)` | 镜面反射 / 投影。`Reflect` 是 `this - normal * (2f * DotProduct(this, normal))` |
| `ToARGB` | `public uint ToARGB { get; }` | **唯一的 `w` 消费点**。映射是 `x→R`、`y→G`、`z→B`、`w→A`，每个分量 `× 256f` 后 `MathF.Min(_, 255U)` 移位拼装 |
| `RotationZ` / `RotationX` | `public float RotationZ { get; }` / `public float RotationX { get; }` | `RotationZ` 是 `Atan2(-x, y)`，与 `Vec2.RotationInRadians` 同约定；`RotationX` 是 `Atan2(z, sqrt(x²+y²))` |
| `Abs` / `ElementWiseProduct` / `ElementWiseDivision` | 三个静态方法 | 逐分量运算，不是整体缩放 |
| `explicit operator Vector3` | `public static explicit operator Vector3(Vec3 vec3)` | 交给 Unity 渲染层，**显式**转换 |
| 静态常量 ×6 | `Side` `(1,0,0,-1)` / `Forward` `(0,1,0,-1)` / `Up` `(0,0,1,-1)` / `One` / `Zero` / `Invalid` | 全 `static readonly`。**`Forward` 是 `(0,1,0)` 不是 `(1,0,0)`**——Y 轴朝前。`Invalid` 是 `(NaN,NaN,NaN,-1f)` |
| 运算符 ×10 | `==` `!=` `+` `-`（两个）`*(Vec3,float)` `*(float,Vec3)` `*(Vec3,MatrixFrame)` `/(Vec3,float)` | **没有 `operator /(float, Vec3)`**（`Vec2` 上有）。`*(Vec3, MatrixFrame)` 是矩阵乘法 |
| `StackArray8Vec3` | `public struct StackArray8Vec3`（**嵌套在 `Vec3` 内**，`Vec3.cs:656`） | 8 个 `Vec3` 的值类型栈数组，索引器 `0..7`，`public const int Length = 8`。**树里只有这一个声明**，`grep -rn "struct StackArray8Vec3" bannerlord-1.3.0/` 命中 1 处，所以完整类型名是 `TaleWorlds.Library.Vec3.StackArray8Vec3` |

## 真实示例

三维向量加权的地图轨迹颜色，逐字照抄自 `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs:195-231`：

```csharp
public override uint GetTrackColor(Track track)
{
    if (track.IsPointer)
    {
        return new Vec3(1f, 1f, 1f, -1f).ToARGB;
    }
    Vec3 fresh = new Vec3(0.6f, 0.95f, 0.2f, -1f);
    Vec3 aging = new Vec3(0.45f, 0.55f, 0.2f, -1f);
    Vec3 old = new Vec3(0.15f, 0.25f, 0.4f, -1f);
    Vec3 color = Vec3.Zero;
    float life = MathF.Min(track.CreationTime.ElapsedHoursUntilNow / Campaign.Current.Models.MapTrackModel.MaxTrackLife, 1f);
    if (life < 0.35f)
    {
        color = (life / 0.35f) * aging + (1f - (life / 0.35f)) * fresh;
    }
    else
    {
        float t = (life - 0.35f) / 0.65f;
        color = t * old + (1f - t) * aging;
    }
    return color.ToARGB;
}
```

这段代码把三件事讲完了：**①** 全程显式传 `w = -1f`——作者清楚 `w` 不参与 `+`/`*`/`ToARGB` 的 RGB 通道，只消费前三个分量。**②** `Vec3` 的线性组合 `t * old + (1f - t) * aging` 就是逐分量的 `Vec3.Lerp`。**③** 全程不碰 `w`，说明 `ToARGB` 的 alpha 字节在这里不是有效值（`w = -1f` 时 `w * 256f` 是负数，`(uint)` 转换负浮点在 C# 规范里是未指定行为）。**想让 alpha 有效就必须显式给 `w` 一个 `[0, 1]` 区间内的值**，例如 `new Vec3(1f, 0.5f, 0f, 0.5f).ToARGB`。

从 XML 属性读位置偏移（`TaleWorlds.Core/ItemObject.cs:696` 与 `WeaponComponentData.cs:517` 的形状）：

```csharp
XmlAttribute centerOfMassNode = node.Attributes["center_of_mass"];
this.CenterOfMass3D = (centerOfMassNode != null) ? Vec3.Parse(centerOfMassNode.Value) : Vec3.Zero;

XmlAttribute holsterNode = node.Attributes["holster_position_shift"];
this.HolsterPositionShift = (holsterNode != null) ? Vec3.Parse(holsterNode.Value) : Vec3.Zero;
```

`Vec3.Parse` 的段数要求（3 或 4，否则抛 `ArgumentOutOfRangeException`）是这条路径的真实约束——XML 里写成 `"1,2"` 或 `"1,2,3,4,5"` 会在加载期抛异常。缺省时用 `Vec3.Zero` 兜底，这正是官方一律写三元表达式而不是 `Parse` 直接调的原因。

用 `Vec3.Invalid` 做「还没有值」的哨兵（逐字照抄自 `SandBox/Missions/MissionLogics/MissionAlleyHandler.cs:129` 的判定形状）：

```csharp
private static Vec3 _fightPosition = Vec3.Invalid;

public void OnTick()
{
    if (MissionAlleyHandler._fightPosition != Vec3.Invalid && (Agent.Main.Position - MissionAlleyHandler._fightPosition).Length >= 20f)
    {
        this.EndFight();
    }
}
```

`Vec3.Invalid` 是 `static readonly` 的 NaN 向量。`!=` 走 `operator !=` → `!(a == b)` → `x == x && y == y && z == z`，**NaN != NaN 所以永远返回 `true`**，这正是这个哨兵能工作的原因。但这个判据只在两边都是同一个 `Vec3.Invalid` 时成立——**不要改成 `if (!pos.IsValid)`**，因为 `IsValid` 对 `Vec3.Zero` 也返回 `true`。

单位向量与朝向（`TaleWorlds.MountAndBlade.View` 的相机代码形状）：

```csharp
this.CameraBearing = matrixFrame2.rotation.f.RotationZ;
Vec3 facing = new Vec3(-MathF.Sin(bearing), MathF.Cos(bearing), 0f);
Vec3 right = Vec3.CrossProduct(Vec3.Up, facing);
Vec3 pos = origin + facing * 10f + right * 2f + Vec3.Up * 5f;
```

`Vec3.Up` 是 `(0,0,1)`，`Vec3.Forward` 是 `(0,1,0)`——**Z 轴朝上、Y 轴朝前**，这是引擎的坐标约定。`RotationZ` 与 `Vec2.RotationInRadians` 同一套角度制，所以 `f.RotationZ` 可以直接喂给 `FromRotation` 类的逻辑。

## 风险与边界

- **`w` 被几乎所有数学运算忽略，包括 `Equals` 和 `GetHashCode`。** `Equals` 是 `((Vec3)obj).x == this.x && ((Vec3)obj).y == this.y && ((Vec3)obj).z == this.z`——**没有 `w`**。`GetHashCode` 是 `(int)(1001f * x + 10039f * y + 117f * z)`，也没有。所以 `new Vec3(1f, 2f, 3f, 0f) == new Vec3(1f, 2f, 3f, -1f)` 是 `true`。这在「`w` 只是临时槽位」的语义下是对的，但如果你指望用 `w` 区分两个向量，**用 `==` / `Equals` / `Dictionary` 都区分不出来**。
- **`GetHashCode` 是极弱的线性哈希。** `1001f * x + 10039f * y + 117f * z` 强转 `int`。系数差异巨大但远小于坐标量级，密集坐标下碰撞极常见。**不要把 `Vec3` 作为 `Dictionary` 的键**——`GameModel` 那些不涉及哈希所以没事，但一旦 `new MBReadOnlyList<T>` 之类的容器换成基于哈希的实现就会出问题。用 `[Vec3i](../Vec3i)` 这种整数向量当键。
- **`ToARGB` 里 `(uint)(负浮点)` 是未指定行为。** 默认 `w = -1f` 时 `w * 256f = -256f`，C# 规范不定义这个转换的结果。官方 `DefaultMapTrackModel` 全程传 `-1f` 并且只用 RGB，说明渲染端不吃 alpha 字节。**你自己要用 alpha 就显式传 `w`。**
- **`ClampMagnitude` 和 `ClampedCopy` 不是一回事。** 前者夹长度、就地；后者夹每个分量、返回新值。混用会让「最大半径 10」的约束实际变成「每个轴最大 10」（半径可达 17.3）。
- **就地 vs 返回新值靠命名分辨，且命名不统一。** `Normalize`/`ClampMagnitude`/`RotateAboutX`/`NormalizeWithoutChangingZ` 就地；`NormalizedCopy`/`ClampedCopy`/`RotateVectorToXYPlane`/`RotateAboutAnArbitraryVector` 返回新值。写 `myVec.RotateAboutZ(a)` 时 `a` 是弧度不是度。
- **`Vec3` 上没有 `Normalized()`。** `Vec2.Normalized()` 在本类型对应的是 `NormalizedCopy()`。而 `Vec3` 上**有 `Normalize()`**——只差一个 `d`。两个类型各写各的，从 `Vec2` 复制代码过来几乎必然编译错。
- **`IsUnit` / `IsNonZero` 在 `Vec3` 上是属性，`Vec2` 上是方法。** `Vec3.IsUnit` 判的是 `LengthSquared` 在 `0.98010004f..1.0201f`，`Vec2.IsUnit()` 判的是 `Length` 在 `0.95..1.05`——容差宽了十倍。
- **`Normalize` 对零向量的退化行为与 `Vec2` 不同。** `Vec3` 在长度 ≤ `1E-05f` 时把 `x/y/z` 全置 0（得到零向量）；`Vec2` 在同样条件下得到 `(0, 1)`。混用两个类型的「归一化零向量」会得到不一致的方向。
- **索引器越界抛 `IndexOutOfRangeException`，不是返回 0。** `this[3]` 是 `w`，`this[4]` 直接抛。这是唯一能读 `w` 的公开途径。
- **`AsVec2` 的 setter 不动 `z`。** `frame.rotation.f.AsVec2 = someVec2` 之后 `z` 保留原值。如果那个 `z` 之前是脏的，你会得到一个方向和俯仰不自洽的向量。规范做法是写完整 `Vec3`。
- **没有 `operator /(float, Vec3)`。** `Vec2` 上两个方向都有（`/(float, Vec2)` 和 `/(Vec2, float)`），`Vec3` 只有 `/(Vec3, float)`。写 `2f / vec3` 编译失败。
- **`AngleBetweenTwoVectors` 每次调用两次 `MathF.Sqrt` 加一次 `Acos`。** 在每帧的 AI 判定循环里代价明显。能用点积阈值代替就用 `Vec3.DotProduct(a, b) > cos(maxAngle) * a.Length * b.Length`，或者先用 `LengthSquared` 比较排除绝大多数远距离目标。
- **`StackArray8Vec3` 是嵌套类型，完整名要带外层。** 它只声明在 `Vec3.cs` 内部（`TaleWorlds.Library.Vec3.StackArray8Vec3`），全树唯一一处。写 `using TaleWorlds.Library;` 后直接写 `StackArray8Vec3` **解析不到**——必须写 `Vec3.StackArray8Vec3`，或者在 `using` 里额外引入嵌套命名空间。这是本类型唯一一处「看起来像顶层类型其实不是」的声明。
- **没有 `IEquatable<Vec3>`。** 对比 [Vec2i](../Vec2i)（实现了 `IEquatable<Vec2i>`）和 [Vec3i](../Vec3i)，整数版本做了接口，整数化更高效。`Vec3` 走 `object.Equals` 会有装箱。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/Vec3.cs:9`，纯值类型，四个构造函数全是 public（`Vec3.cs:42` 的 `Vec3(float x = 0f, float y = 0f, float z = 0f, float w = -1f)` 四个参数全带默认值）。也就是说**你可以零参数 `new Vec3()` 得到零向量**（`w` 自动是 `-1f`，不是 `0f`）。三条真实入口：

- 读单位位置：`Agent.Position`（`Agent.cs:174`）本身就是 `Vec3`，getter 每次都进原生层取样，不缓存。
- 从平面升维：`Vec3` 的 `Vec3(Vec2 xy, float z = 0f, float w = -1f)`（`Vec3.cs:60`），或 `Vec2.ToVec3(float z = 0f)`。
- 降维回平面：`AsVec2`（`Vec3.cs:525`），注意它是**属性且有 setter** —— `someVec3.AsVec2 = someVec2` 会把 x/y 写回去但保留 z 和 w。

**一段可直接跑的三行平滑**（`alpha` 按帧时长缩放，形态照 `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs:946` 的引擎写法）：

```csharp
Vec3 avg = Hero.MainHero.Position;
avg = Vec3.Lerp(avg, someTargetPosition, dt * 0.6f);
Debug.Print("avg = " + avg.RotationZ, 0);
```

第三个参数是 **alpha 不是 t**，方法体只有一句 `return v1 * (1f - alpha) + v2 * alpha;`（`Vec3.cs:134`）——它不做任何 clamp，`alpha > 1f` 会真的外插出目标之外。所以引擎里每一处都写成 `dt * 系数` 而不是裸 `dt`。

取角度用 `RotationZ`（`Vec3.cs:584`），实现是 `MathF.Atan2(-this.x, this.y)`，与 [Vec2](../Vec2) 的 `RotationInRadians` 同一套「零度 +Y、顺时针为正」约定，两者混用不需要换算。

**最常见的坑：`w` 参与不了任何比较。** `Equals` 与 `GetHashCode` 都只看 x/y/z，所以 `new Vec3(1f, 2f, 3f, 0f) == new Vec3(1f, 2f, 3f, -1f)` 结果是 `true`。这在「`w` 只是临时槽位」的语义下没错，但如果你想靠 `w` 区分两个向量，用 `==`、`Equals`、`Dictionary` 全都区分不出来。要区分就直接比 `yourVec.w`。这条已在「风险与边界」首条展开。

## 跨版本提示

`Vec3.cs` 在 1.3.0 是 20150 字节，1.3.15 起到 1.5.3 都是 **20305 字节**。差的 155 字节是一个**真实的新增成员**：`public Vec3 CrossProductWithUpAsLeftParameter()`，实现是 `return new Vec3(-this.y, this.x, 0f, -1f);`。它是 `CrossProductWithUp()`（返回 `(y, -x, 0)`）的**手性相反版本**——原版是 `Cross(Up, this)`，新版是 `Cross(this, Up)`。1.3.0 里没有这个成员，1.3.15 起才有。

其余成员跨 1.3 → 1.5 逐条等价：`Parse` 的 3/4 段校验、`ToARGB` 的 `× 256f` + `MathF.Min(255U)` 拼装、`IsUnit` 的容差、`Equals`/`GetHashCode` 忽略 `w`、六个静态常量的值、十个运算符，全部没动。`w` 默认 `-1f` 的约定也没变。

所以升级风险点很具体：**如果你在 1.3.0 上写了 `CrossProductWithUp()`，在 1.3.15+ 会有一个同名概念的兄弟成员 `CrossProductWithUpAsLeftParameter()` 可用，但旧的那个不会消失、不会改语义。** 反过来，跨版本移植 1.4+ 的代码到 1.3.0 时，那个方法会找不到——这是本类唯一一处真实的成员增删。

## 依赖关系

- 二维对应：[Vec2](../Vec2) 与本类**无继承关系**，但 `Distance`/`Length`/`Lerp`/`Slerp`/`NearlyEquals` 同名。降维是本类的 `AsVec2` 属性（有 setter），升维是 `Vec2.ToVec3(float z = 0f)`
- 整数对应：[Vec3i](../Vec3i) 用于网格与索引，实现了 `IEquatable<Vec3i>`
- 坐标系承载：[MatrixFrame](../MatrixFrame) 的 `origin` / `rotation`（含 `f`/`s`/`u` 三个 `Vec3`）是本类型最主要的容器；`operator *(Vec3, MatrixFrame)` 是唯一的矩阵乘法入口
- 数学库：[MBMath](../MBMath) 提供带 `minimumDifference` 的 `Lerp` 重载、`HSBtoRGB`/`RGBtoHSB`/`GammaCorrectRGB`、`GetRayPlaneIntersectionPoint`、`IntersectLineSegmentWithTriangle`、`IntersectLineSegmentWithBoundingBox`——这些是本类型在引擎里被真正使用的高阶运算
- 四元数方向：任意轴旋转也可以走 [Quaternion](../Quaternion)，但本类自带 `RotateAboutAnArbitraryVector` 无需绕路
- 颜色侧：[Color](../Color) 的 `FromVector3(Vec3)` / `ToVec3()` 与本类型互转，但注意 `Color` 也有自己的 RGBA 四分量语义，两套不要混
- 数据读回：`CraftingTemplate`、`ItemObject`、`WeaponComponentData`、`ShipPhysicsReference` 的 XML 加载全部走 `Vec3.Parse`
- 桶首页：[core-extra API 分区](../)
