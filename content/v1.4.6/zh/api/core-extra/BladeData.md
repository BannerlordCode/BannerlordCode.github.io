---
title: "BladeData"
description: "锻造刀身数据：CraftingPiece 的 BladeData 子节点，描述一片刀身的尺寸、伤害系数、伤害类型，以及成品的佩戴 mesh 与物理材质。"
---

# BladeData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class BladeData : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`

## 概述

126 行、14 个公开属性，是 [CraftingPiece](../CraftingPiece) 上挂的一块纯数据。锻造系统里一件武器由若干「部件」组成，其中刀身部件会额外带一个 `BladeData` 子节点描述这片刀身本身。`CraftingPiece.Deserialize` 遇到名为 `BladeData` 的子节点时，会 `new BladeData(this.PieceType, this.Length)` 然后立刻对它调 `Deserialize(objectManager, xmlNode)`——所以它的存在完全依附于 `CraftingPiece`，没有独立的加载入口。

它和 [WeaponComponentData](../WeaponComponentData) 长得像但职责不同：`BladeData` 只描述**一片刀身**（长度、宽度、斩击/突刺的伤害系数与伤害类型），不描述一把武器的整体手感。`WeaponComponentData` 才是成品武器的完整参数表，锻造时由 [Crafting](../Crafting) 把两者拼起来。

## 心智模型

把 `BladeData` 想成**锻造配方里刀身那一栏的数值**。玩家在锻造界面选一片刀身时，`Crafting` 从 `CraftingPiece.BladeData` 读出 `SwingDamageFactor` / `ThrustDamageFactor` 去算伤害，乘到 `WeaponComponentData` 的基础伤害上；`BladeWidth` 参与宽刃的额外伤害加成；`HolsterMeshName` / `HolsterBodyName` / `HolsterMeshLength` 决定成品背在背上是长什么样。

四条真会咬人的地方：

1. **构造器把两个伤害类型先设成 `DamageTypes.Invalid`。** `BladeData(CraftingPiece.PieceTypes pieceType, float bladeLength)` 里显式写了 `ThrustDamageType = DamageTypes.Invalid; SwingDamageType = DamageTypes.Invalid;`。没有 `<Thrust>` / `<Swing>` 子节点的刀身，两个因子都停在 `0`，两个类型都是 `Invalid`。`Crafting` 与工具提示代码都拿 `!= DamageTypes.Invalid` 做前置判断，所以「没配就是没配」不会被当成 0 伤害。

2. **`BladeWidth` 有推导默认值，比例系数全是百分数。** 属性缺失时 `BladeWidth = 0.15f + BladeLength * 0.3f`，而 `BladeLength` 与 `BladeWidth` 在 XML 里都是整数厘米，`Deserialize` 里乘 `0.01f` 转米。`HolsterMeshLength` 同样乘 `0.01f`。

3. **`PieceType` 是唯一的公开字段，且在构造器里就定型。** `public readonly CraftingPiece.PieceTypes PieceType;` 直接赋构造参数，**没有对应的属性，也没有任何 setter**。其余十三个数值全部是 `private set` 的属性。也就是说：**代码里造不出一个「刀身」，只能造出「一个知道自己是哪种部件类型的空壳」，真正的数值只能靠 `Deserialize` 从 XML 填。**

4. **它是 `MBObjectBase` 的子类，但没有 `StringId`。** 继承它只是为了蹭到 `MBObjectManager` 的接口形状——`CraftingPiece.Deserialize` 明明是直接 `new` 出来的，没有注册、没有 id。所以**别拿 `MBObjectManager.Instance.GetObject<BladeData>(...)` 去取**，那是死路。

## 关键成员

### 尺寸

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BladeLength` | `public float BladeLength { get; private set; }` | 刀身长度（米）。**构造器就接受这个值**，`Deserialize` 里若 XML 没写 `blade_length` 则保留构造时传入的 `CraftingPiece.Length`。 |
| `BladeWidth` | `public float BladeWidth { get; private set; }` | 刀身宽度（米）。XML 缺失时推导为 `0.15f + BladeLength * 0.3f`——**不是 0**，窄刃判定与宽刃加成都靠这个推导值。 |

### 伤害

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SwingDamageType` | `public DamageTypes SwingDamageType { get; private set; }` | 斩击伤害类型。构造器先置 `Invalid`，有 `<Swing damage_type="..."/>` 子节点时由 `Enum.Parse(..., true)` 填入（**忽略大小写**）。 |
| `SwingDamageFactor` | `public float SwingDamageFactor { get; private set; }` | 斩击伤害系数，来自 `<Swing>` 的 `damage_factor`。**没配就是 0，不是 1。** |
| `ThrustDamageType` | `public DamageTypes ThrustDamageType { get; private set; }` | 突刺伤害类型，规则同上。 |
| `ThrustDamageFactor` | `public float ThrustDamageFactor { get; private set; }` | 突刺伤害系数，来自 `<Thrust>` 的 `damage_factor`。 |

### 成品呈现与物理

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `PhysicsMaterial` | `public string PhysicsMaterial { get; private set; }` | 刀身的物理材质名（决定砍击音效与物理表现）。XML 缺失时为 **null**。 |
| `BodyName` | `public string BodyName { get; private set; }` | 刀身自身的碰撞体名。XML 缺失时为 **null**。 |
| `HolsterMeshName` | `public string HolsterMeshName { get; private set; }` | 成品未持握时背在身上的 mesh 名。XML 缺失时为 **null**。 |
| `HolsterBodyName` | `public string HolsterBodyName { get; private set; }` | 佩戴该 mesh 用的体型名。XML 缺失时为 **null**。 |
| `HolsterMeshLength` | `public float HolsterMeshLength { get; private set; }` | 背负 mesh 的长度（米）。XML 缺失时 `0.01f * 0f = 0f`。 |

### 堆叠与构造

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `StackAmount` | `public short StackAmount { get; private set; }` | 可堆叠数量。XML 缺失时为 `1`，不是 0。 |
| `PieceType` | `public readonly CraftingPiece.PieceTypes PieceType;` | 构造时传入的部件类型，**唯一公开字段、无属性、无 setter**。 |
| `.ctor` | `public BladeData(CraftingPiece.PieceTypes pieceType, float bladeLength)` | 定 `PieceType` 与 `BladeLength`，并把两个伤害类型预置成 `DamageTypes.Invalid`。**其余数值全部留默认零值。** |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)` | 开头调 `Initialize()`，随后读七个标量属性，再遍历子节点处理 `Thrust` / `Swing`。**它读的属性名与属性名不同的一处只有 holster 三个。** |

## 真实示例

从锻造配方里取刀身，判断这一片到底配没配伤害（`Invalid` 守卫是必须的）：

```csharp
CraftingPiece blade = MBObjectManager.Instance.GetObject<CraftingPiece>("sword_blade_1");

if (blade == null)
{
    Debug.Print("crafting piece not loaded", 0);
    return;
}

BladeData data = blade.BladeData;
if (data == null)
{
    Debug.Print("this piece carries no blade data", 0);
    return;
}

Debug.Print("pieceType=" + data.PieceType + " length=" + data.BladeLength + " width=" + data.BladeWidth, 0);

if (data.SwingDamageType != DamageTypes.Invalid)
{
    Debug.Print("swing: " + data.SwingDamageType + " x" + data.SwingDamageFactor, 0);
}

if (data.ThrustDamageType != DamageTypes.Invalid)
{
    Debug.Print("thrust: " + data.ThrustDamageType + " x" + data.ThrustDamageFactor, 0);
}
```

读出背负 mesh 与物理材质（注意这四个字符串属性在 XML 缺项时是 **null** 而不是空串）：

```csharp
CraftingPiece blade = MBObjectManager.Instance.GetObject<CraftingPiece>("axe_blade_1");
BladeData data = blade.BladeData;

string holsterMesh = data.HolsterMeshName ?? "";
string holsterBody = data.HolsterBodyName ?? "";
string body = data.BodyName ?? "";
string physics = data.PhysicsMaterial ?? "";

Debug.Print("holster=" + holsterMesh + " body=" + holsterBody, 0);
Debug.Print("bladeBody=" + body + " physics=" + physics, 0);
Debug.Print("holsterMeshLength=" + data.HolsterMeshLength + " stackAmount=" + data.StackAmount, 0);
```

按 `PieceType` 枚举遍历所有带刀身的部件，统计一遍伤害覆盖率（`Invalid` 守卫的必要性在这里最明显）：

```csharp
List<CraftingPiece> pieces = MBObjectManager.Instance.GetObjectTypeList<CraftingPiece>();

int withBlade = 0;
int withSwing = 0;
int withThrust = 0;
for (int i = 0; i < pieces.Count; i++)
{
    BladeData data = pieces[i].BladeData;
    if (data == null)
    {
        continue;
    }

    withBlade++;
    if (data.SwingDamageType != DamageTypes.Invalid)
    {
        withSwing++;
    }

    if (data.ThrustDamageType != DamageTypes.Invalid)
    {
        withThrust++;
    }
}

Debug.Print("pieces=" + pieces.Count + " withBlade=" + withBlade
    + " withSwing=" + withSwing + " withThrust=" + withThrust, 0);
```

## 风险与边界

- **`sealed`，不能继承。** 而且连「用代码填数值」的公开路径都没有——属性全是 `private set`。
- **数值只能来自 XML。** 构造器只接受 `pieceType` 与 `bladeLength`，其余全留零。**运行时改不了**，要走重新反序列化。
- **伤害因子缺省是 0，不是 1。** 没写 `<Swing>` / `<Thrust>` 时因子为 `0`，配合 `DamageTypes.Invalid` 表示「这片刀身不带这种攻击」，而不是「伤害乘 1」。
- **伤害类型默认 `Invalid`。** 构造器显式预置，`Deserialize` 只有在看到对应子节点时才覆盖。判断前必须比 `DamageTypes.Invalid`。
- **`BladeWidth` 有非零默认值。** 缺省是 `0.15f + BladeLength * 0.3f`，不是 0。做「宽度为 0 即最窄」的判据会失效。
- **四个字符串属性在缺项时是 null。** `PhysicsMaterial` / `BodyName` / `HolsterMeshName` / `HolsterBodyName` 全都可能为 null，直接 `.Length` 或字符串拼接会炸。
- **XML 里的长度单位是厘米。** `BladeLength` / `BladeWidth` / `HolsterMeshLength` 都乘 `0.01f`。想直接填米值会被缩放成百分之一。
- **继承 `MBObjectBase` 但没有 `StringId`。** 实例是 `new` 出来的，没进 `MBObjectManager`。**`GetObject<BladeData>` 取不到任何东西。**
- **它不是武器成品参数。** 别拿它替代 [WeaponComponentData](../WeaponComponentData)：后者才有 `Handling` / `WeaponBalance` / `TotalInertia` / `StickingFrame` 这些手感与物理量。
- **只在 `CraftingPiece.Deserialize` 里被构造。** 别指望从 `MBObjectManager` 或任何注册表拿到它。
- **`StackAmount` 缺省 1。** 与其它数值字段缺省 0 的规则相反。

## 依赖关系

- 宿主：[CraftingPiece](../CraftingPiece) 的 `BladeData` 属性在 `Deserialize` 遇到 `<BladeData>` 子节点时 `new` 并反序列化
- 部件类型：`CraftingPiece.PieceTypes` 嵌套枚举（`Invalid` / `Blade` / `Guard` / …），构造时定死进只读字段
- 消费者：[Crafting](../Crafting) 读 `SwingDamageFactor` / `ThrustDamageFactor` / `BladeWidth` 参与成品数值计算
- 成品参数：[WeaponComponentData](../WeaponComponentData) 承接锻造结果，是实际生效的武器参数表
- 伤害枚举：`DamageTypes`（`Blunt` / `Cut` / `Pierce` / `Invalid` 等），由 `Enum.Parse` 从 XML 文本解析
- 索引入口：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject<CraftingPiece>` / `GetObjectTypeList<CraftingPiece>` 提供配方与部件清单
- 基类形状：[MBObjectBase](../../campaign-ext/MBObjectBase)（本类型不实际使用其 id 机制）
- 本地化：[TextObject](../../localization/TextObject) 承载 [CraftingPiece](../CraftingPiece) 的 `Name`，刀身数据本身不含文本
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)