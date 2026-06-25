---
title: CraftingPiece
description: CraftingPiece - 武器锻造系统的零件数据类，定义刀?护手/握柄/配重的网格、物理参数、属性加成与材料消?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingPiece`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPiece

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** sealed class（继承自 

`MBObjectBase

`?
## 概述

`CraftingPiece

` 是武器锻造系统中的核心数据类，代表一个可组装的武器零件。一把可锻造武器由四种零件类型组成：刀刃（Blade）、护手（Guard）、握柄（Handle）、配重（Pommel）。每?

`CraftingPiece

` 实例定义了零件的 3D 网格、物理参数（长度、重量、转动惯量、质心）、武器属性加成（挥砍伤害、刺击伤害、操控性等）、锻造材料消耗以及视觉外观参数?
该类?XML 数据文件反序列化加载（通过 

`Deserialize

` 方法），?

`MBObjectManager

` 统一管理。锻造系统中，玩家通过?

`CraftingTemplate

` 定义的零件槽位中选择不同?

`CraftingPiece

` 组合来创建自定义武器——不同零件组合会产生不同的武器属性和外观?
## 心智模型

?

`CraftingPiece

` 想成"武器零件的蓝??
**四类零件** ?

`PieceTypes

` 枚举定义了四种零件类型：
- 

`Blade

`（刀刃）?决定武器的主要伤害和攻击范围，携?

`BladeData

` 详细数据
- 

`Guard

`（护手）?影响操控性和防御，默?

`FullScale = true

`
- 

`Handle

`（握柄）?影响握持长度和重?- 

`Pommel

`（配重）?影响平衡和重量，默认 

`FullScale = true

`

**物理计算** ?零件的物理属性部分从 XML 直接读取，部分由公式计算?- 

`Inertia

`（转动惯量）= 

`0.0833 × Weight × Length²

`（均质杆公式 I = mL²/12?- 

`CenterOfMass

`（质心位置）= 

`Length × center_of_mass_ratio

`（ratio 默认 0.5，即中点?- 

`Length

` 可由 

`length

` 属性直接指定（厘米转米 ×0.01），也可?

`distance_to_next_piece + distance_to_previous_piece

` 推导

**属性加?* ?零件通过七个 bonus 属性贡献武器最终属性：

`SwingDamageBonus

`、`SwingSpeedBonus

`、`ThrustDamageBonus

`、`ThrustSpeedBonus

`、`HandlingBonus

`、`AccuracyBonus

`、`ArmorBonus

`。这些值在 

`StatContributions

` XML 子节点中定义?
**材料消?* ?每个零件消耗特定类型和数量的锻造材料（铁、钢、精钢等）。`MaterialsUsed

` 提供只读的材料列表，

`IsEmptyPiece

` 判断是否为空零件（无材料消耗）。`_materialCosts

` 是按 

`CraftingMaterials

` 枚举索引?9 元素数组，用于快速查询?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`IsValid

` \| 

`bool

` \| 是否为有效零件（

`false

` 表示?

`GetInvalidCraftingPiece

` 创建的占位符?\|
\| 

`Name

` \| 

`TextObject

` \| 零件显示名称 \|
\| 

`PieceType

` \| 

`PieceTypes

` \| 零件类型（Blade/Guard/Handle/Pommel?\|
\| 

`MeshName

` \| 

`string

` \| 3D 网格名称 \|
\| 

`Culture

` \| 

`BasicCultureObject

` \| 文化限制（可空，表示无限制） \|
\| 

`Length

` \| 

`float

` \| 零件长度（米?\|
\| 

`DistanceToNextPiece

` \| 

`float

` \| 与下一个零件的连接距离 \|
\| 

`DistanceToPreviousPiece

` \| 

`float

` \| 与上一个零件的连接距离 \|
\| 

`PieceOffset

` \| 

`float

` \| 零件偏移量（米） \|
\| 

`PreviousPieceOffset

` \| 

`float

` \| 前一零件偏移?\|
\| 

`NextPieceOffset

` \| 

`float

` \| 后一零件偏移?\|
\| 

`Weight

` \| 

`float

` \| 零件重量 \|
\| 

`Inertia

` \| 

`float

` \| 转动惯量（自动计算：

`0.0833 × Weight × Length²

`?\|
\| 

`CenterOfMass

` \| 

`float

` \| 质心位置（自动计算：

`Length × center_of_mass_ratio

`?\|
\| 

`ArmorBonus

` \| 

`int

` \| 护甲加成 \|
\| 

`SwingDamageBonus

` \| 

`int

` \| 挥砍伤害加成 \|
\| 

`SwingSpeedBonus

` \| 

`int

` \| 挥砍速度加成 \|
\| 

`ThrustDamageBonus

` \| 

`int

` \| 刺击伤害加成 \|
\| 

`ThrustSpeedBonus

` \| 

`int

` \| 刺击速度加成 \|
\| 

`HandlingBonus

` \| 

`int

` \| 操控性加?\|
\| 

`AccuracyBonus

` \| 

`int

` \| 精准度加?\|
\| 

`PieceTier

` \| 

`int

` \| 零件等级（默?1?\|
\| 

`FullScale

` \| 

`bool

` \| 是否使用完整缩放（Guard/Pommel 默认 true?\|
\| 

`ItemHolsterPosShift

` \| 

`Vec3

` \| 武器挂载位置偏移 \|
\| 

`Appearance

` \| 

`float

` \| 外观值（默认 0.5?\|
\| 

`IsGivenByDefault

` \| 

`bool

` \| 是否默认提供（无需解锁?\|
\| 

`IsHiddenOnDesigner

` \| 

`bool

` \| 是否在锻造设计器中隐?\|
\| 

`IsUnique

` \| 

`bool

` \| 是否为唯一零件 \|
\| 

`ItemUsageFeaturesToExclude

` \| 

`string

` \| 排除的物品使用特?\|
\| 

`MaterialsUsed

` \| 

`MBReadOnlyList&lt;(CraftingMaterials, int)&gt;

` \| 材料消耗列表（只读?\|
\| 

`IsEmptyPiece

` \| 

`bool

` \| 是否为空零件（所有材料消耗为 0?\|
\| 

`CraftingCost

` \| 

`int

` \| 锻造费?\|
\| 

`RequiredSkillValue

` \| 

`int

` \| 所需锻造技能?\|
\| 

`BladeData

` \| 

`BladeData

` \| 刀刃详细数据（?Blade 类型有值） \|
\| 

`All

` \| 

`MBReadOnlyList&lt;CraftingPiece&gt;

`（静态） \| 对象管理器中所有已注册的零?\|

## 公共字段

\| 字段 \| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`AdditionalWeaponFlags

` \| 

`WeaponFlags

` \| 附加武器标志（如特定攻击动作?\|
\| 

`AdditionalItemFlags

` \| 

`ItemFlags

` \| 附加物品标志 \|

## 枚举：PieceTypes

\| ?\| 名称 \| 说明 \|
\|----\|------\|------\|
\| -1 \| 

`Invalid

` \| 无效类型（用于占位符?\|
\| 0 \| 

`Blade

` \| 刀?\|
\| 1 \| 

`Guard

` \| 护手 \|
\| 2 \| 

`Handle

` \| 握柄 \|
\| 3 \| 

`Pommel

` \| 配重 \|
\| 4 \| 

`NumberOfPieceTypes

` \| 类型计数（非实际类型?\|

## 主要方法

### GetInvalidCraftingPiece
`

`

`csharp
public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)
`

`

`
静态方法。返回指定类型的无效占位符零件。使用懒初始化缓存（

`_invalidCraftingPiece

` 数组），首次调用时为每种类型创建一?

`IsValid = false

`、`Name = "Invalid"

` 的占位符零件。用于锻?UI 中当某个槽位未选择零件时显示?
### Deserialize
`

`

`csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
`

`

`
?XML 节点反序列化所有属性。解析流程：
1. 设置 

`IsValid = true

`，读?

`name

`、`piece_type

`、`mesh

`、`culture

`
2. 读取 

`appearance

`（默?0.5）、`CraftingCost

`、`weight

`
3. 读取长度：若?

`length

` 属性则直接用（厘米转米），否则?

`distance_to_next_piece

` + 

`distance_to_previous_piece

` 推导
4. 计算物理属性：

`Inertia = 0.0833 × Weight × Length²

`，`CenterOfMass = Length × center_of_mass_ratio

`
5. 读取 

`item_holster_pos_shift

`（逗号分隔?Vec3）、`tier

`（默?1）、`is_unique

`、`is_default

`、`is_hidden

`
6. 读取 

`full_scale

`（Guard/Pommel 默认 true）、`excluded_item_usage_features

`、`required_skill_value

`
7. 遍历子节点：

`StatContributions

`（属性加成）、`BladeData

`（刀刃数据）、`BuildData

`（构建偏移）、`Materials

`（材料消耗）、`Flags

`（武?物品标志）、`CraftingTemplates

`（注册到锻造模板）

## 使用示例

### 示例 1：查询所有可用的刀刃零?
**场景**: 你制作了一个锻造辅助工具，需要列出所有可用的刀刃零件供玩家选择?
`

`

`csharp
using TaleWorlds.Core;
using System.Linq;

public static void ListAllBlades()
{
    // 获取所有已注册?CraftingPiece
    var allPieces = CraftingPiece.All;

    // 筛选有效的刀刃零?    var blades = allPieces.Where(p =&gt; p.IsValid && p.PieceType == CraftingPiece.PieceTypes.Blade);

    foreach (var blade in blades)
    {
        Console.WriteLine($"刀? {blade.Name}");
        Console.WriteLine($"  长度: {blade.Length:F2}m, 重量: {blade.Weight:F2}kg");
        Console.WriteLine($"  挥砍伤害加成: {blade.SwingDamageBonus}");
        Console.WriteLine($"  刺击伤害加成: {blade.ThrustDamageBonus}");
        Console.WriteLine($"  操控性加? {blade.HandlingBonus}");
        Console.WriteLine($"  锻造费? {blade.CraftingCost}");
        Console.WriteLine($"  所需技? {blade.RequiredSkillValue}");
        Console.WriteLine($"  材料:");
        foreach (var (material, count) in blade.MaterialsUsed)
        {
            Console.WriteLine($"    {material}: {count}");
        }
    }
}
`

`

`

### 示例 2：在锻造界面中使用无效占位?
**场景**: 锻造界面中某个零件槽位为空时，需要显?未选择"状态?
`

`

`csharp
using TaleWorlds.Core;

public class CraftingSlotVM
{
    private CraftingPiece _currentPiece;
    private readonly CraftingPiece.PieceTypes _slotType;

    public CraftingSlotVM(CraftingPiece.PieceTypes slotType)
    {
        _slotType = slotType;
        // 初始化为无效占位?        _currentPiece = CraftingPiece.GetInvalidCraftingPiece(slotType);
    }

    public void SetPiece(CraftingPiece piece)
    {
        _currentPiece = piece ?? CraftingPiece.GetInvalidCraftingPiece(_slotType);
    }

    public string DisplayName =&gt; _currentPiece.IsValid ? _currentPiece.Name.ToString() : "未选择";
    public bool HasPiece =&gt; _currentPiece.IsValid;
    public bool IsEmpty =&gt; _currentPiece.IsEmptyPiece;
}
`

`

`

**要点**: 

`CraftingPiece

` ?sealed 类，不能继承。所有属性都?private set，只能在 

`Deserialize

` 内部或通过 

`GetInvalidCraftingPiece

` 设置——你不能在运行时修改零件属性。`Inertia

` ?

`CenterOfMass

` 是自动计算的，不直接?XML 读取。`MaterialsUsed

` 返回 

`MBReadOnlyList

`，不能修改。`IsEmptyPiece

` 通过检?

`_materialCosts

` 数组是否全为 0 来判断。`BladeData

` 仅在 

`PieceType == Blade

` 时有值，其他类型?null。`All

` 静态属性依?

`Game.Current.ObjectManager

`，必须在游戏初始化后使用。`AdditionalWeaponFlags

` ?

`AdditionalItemFlags

` 是公共字段（非属性），从 XML ?

`Flags

` 子节点解析?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
