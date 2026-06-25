---
title: "Crafting"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Crafting`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Crafting

**命名空间:** TaleWorlds.Core  
**模块:** TaleWorlds.Core  
**类型:** public class

## 概述

`Crafting

` ?Bannerlord 武器锻造系统的核心类。它实现了玩家在锻造台设计自定义武器的完整逻辑——选择锻造模板（

`CraftingTemplate

`）、拼装武器部件（

`WeaponDesignElement

`）、计算武器属性（伤害/速度/重量/平衡等物理参数）、生成最终物品（

`ItemObject

`）。本类是"武器设计?的数据后端，UI 层（

`CraftingVM

`）通过它操作武器设计?
它采?部件组合 + 物理模拟"的设计哲学。每件武器由多个部件（刀刃、护手、柄、配重等 

`CraftingPiece

`）按锻造模板拼装。武器属性不是手写的——本类通过物理模拟计算：`CalculateCenterOfMass

` 算重心、`CalculateWeaponInertia

` 算转动惯量、`SimulateSwingLayer

`/

`SimulateThrustLayer

` 模拟挥砍/刺击动作、`CalculateSwingSpeed

`/

`CalculateThrustSpeed

` 算速度、`CalculateSwingBaseDamage

`/

`CalculateThrustBaseDamage

` 算伤害。这让玩家设计的武器属性真实反映其物理结构——长柄重刃挥砍强但慢，短刃轻刃快速但伤害低?
它还支持撤销/重做（`Undo

`/

`Redo

`/

`UpdateHistory

`）、随机生成（

`Randomize

`）、XML 导出导入（`GetXmlCodeForCurrentItem

`/

`TryGetWeaponPropertiesFromXmlCode

`，便于分享武器设计）、预锻造武器加载（

`CreatePreCraftedWeaponOnDeserialize

`/

`InitializePreCraftedWeaponOnLoad

`，存档加载时恢复自定义武器）。`RefiningFormula

` 嵌套类定义原料精炼配方（?2 铁矿 ?1 铁）?
模组开发者在扩展锻造系统时主要通过 

`GenerateItem

`（静态）程序化生成自定义武器，或通过 

`CraftingTemplate

` 添加新锻造模板。本类属于核心数据层，战役和战斗均可使用?
## 心智模型

?

`Crafting

` 想象?武器设计的工作台"。玩家选择一个锻造模板（?单手?），模板定义了部件槽位（刀刃、护手、柄、配重）和约束。玩家为每个槽位选择部件，本类实时计算组合后的武器属性。设计完成后 

`GenerateItem

` 生成可使用的 

`ItemObject

`?
属性计算的物理流程?1) 

`CalculateCenterOfMass

` 算各部件质量加权重心?2) 

`CalculateWeaponInertia

` 用平行轴定理（`ParallelAxis

`）算绕重心的转动惯量?3) 

`CalculateSweetSpot

` 箇最佳击打点?4) 

`SimulateSwingLayer

`/

`SimulateThrustLayer

` 模拟挥砍/刺击动作——给定力矩和惯量算最终速度和时间；(5) 

`CalculateSwingSpeed

`/

`CalculateThrustSpeed

` 把模拟结果转为游戏速度值；(6) 

`CalculateSwingBaseDamage

`/

`CalculateThrustBaseDamage

` 基于速度、质量、击打点算伤害。`CalculateAgility

` 算操控性（基于重量和平衡）?
部件系统：`WeaponDesignElement

` 封装一?

`CraftingPiece

`（部件定义）和缩放比例。`SwitchToPiece

` 替换某槽位部件；

`ScaleThePiece

` 调整部件缩放（影响长度和重量）；

`ReIndex

` 重新索引所有部件（缩放变化后）。`GetRandomPieceOfType

` 随机选择某类型部件（用于 

`Randomize

`）。`CraftingTemplate

` 定义可用部件类型和槽位约束?
历史管理：`UpdateHistory

` 在每次修改后保存当前状态到历史栈；

`Undo

`/

`Redo

` 在历史栈中导航；

`_currentHistoryIndex

` 跟踪当前位置。这让武器设计器支持 Ctrl+Z/Ctrl+Y?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CraftedWeaponName

` \| 

`TextObject

`（只读） \| 当前设计武器的名?\|

### 原料权重常量（`public const int

`?
\| 常量 \| ?\| 说明 \|
\|------\|------\|------\|
\| 

`WeightOfCrudeIron

` \| 1 \| 粗铁权重 \|
\| 

`WeightOfIron

` \| 2 \| 铁权?\|
\| 

`WeightOfCompositeIron

` \| 3 \| 合成铁权?\|
\| 

`WeightOfSteel

` \| 4 \| 钢权?\|
\| 

`WeightOfRefinedSteel

` \| 5 \| 精炼钢权?\|
\| 

`WeightOfCalradianSteel

` \| 6 \| 卡拉迪亚钢权?\|

## 主要方法

### Crafting（构造函数）

`

`

`csharp
public Crafting(CraftingTemplate craftingTemplate, BasicCultureObject culture, TextObject name)
`

`

`

构造函数。`craftingTemplate

` 定义武器类型和部件约束；

`culture

` 定义文化（影响命名和外观）；

`name

` 是武器名称。构造后调用 

`Init

` 初始化?
### Init

`

`

`csharp
public void Init()
`

`

`

初始化武器设计——按模板填充默认部件、计算初始属性、清空历史栈?
### SwitchToPiece / SwitchToCraftedItem / ScaleThePiece / ReIndex

`

`

`csharp
public void SwitchToPiece(WeaponDesignElement piece)
public void SwitchToCraftedItem(ItemObject item)
public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)
public void ReIndex(bool enforceReCreation = false)
`

`

`

`SwitchToPiece

` 替换某槽位部件；

`SwitchToCraftedItem

` 加载已有武器到设计器；`ScaleThePiece

` 调整某类型部件缩放百分比；`ReIndex

` 重新索引所有部件（缩放或替换后调用）?
### Randomize / GetRandomPieceOfType

`

`

`csharp
public void Randomize()
public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)
`

`

`

`Randomize

` 随机生成武器设计——为每个槽位随机选部件和缩放。`GetRandomPieceOfType

` 随机选一个指定类型的部件?
### Undo / Redo / UpdateHistory

`

`

`csharp
public bool Undo()
public bool Redo()
public void UpdateHistory()
`

`

`

撤销/重做/保存历史。`Undo

`/

`Redo

` 返回是否成功（历史栈是否有对应位置）。`UpdateHistory

` 在每次修改后调用，把当前状态压入历史栈?
### GetCurrentCraftedItemObject / GenerateItem（静态）

`

`

`csharp
public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)
public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)
`

`

`

`GetCurrentCraftedItemObject

` 生成当前设计?

`ItemObject

`。`GenerateItem

`（静态）按武器设计生成物品——模组可程序化调用此方法创建自定义武器。`forceReCreate

` 强制重新生成（否则用缓存）；

`customId

` 自定义物?ID?
### GetStatDatas / GetStatDatasFromTemplate（静态）

`

`

`csharp
public IEnumerable&lt;CraftingStatData&gt; GetStatDatas(int usageIndex)
public static IEnumerable&lt;CraftingStatData&gt; GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)
`

`

`

返回武器属性数据列表（伤害、速度、重量、平衡等 

`CraftingStatData

`）。`usageIndex

` 指定武器用法（单?双手/双手持盾等）。UI 用此数据显示属性对比?
### GetXmlCodeForCurrentItem / TryGetWeaponPropertiesFromXmlCode

`

`

`csharp
public string GetXmlCodeForCurrentItem(ItemObject item)
public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple&lt;CraftingPiece, int&gt;[] pieces)
`

`

`

XML 导出导入。`GetXmlCodeForCurrentItem

` 把当前设计序列化?XML 字符串（便于分享）；

`TryGetWeaponPropertiesFromXmlCode

` ?XML 反序列化出模板和部件列表?
### CreatePreCraftedWeaponOnDeserialize / InitializePreCraftedWeaponOnLoad（静态）

`

`

`csharp
public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement[] usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)
public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)
`

`

`

存档加载时恢复自定义武器。`CreatePreCraftedWeaponOnDeserialize

` 从部件数组重建武器；

`InitializePreCraftedWeaponOnLoad

` ?

`WeaponDesign

` 初始化武器?
### SetCraftedWeaponName / GetRandomCraftName

`

`

`csharp
public void SetCraftedWeaponName(TextObject weaponName)
public TextObject GetRandomCraftName()
`

`

`

`SetCraftedWeaponName

` 设置武器名称；`GetRandomCraftName

` 随机生成名称（按文化和武器类型）?
## 使用示例

### 示例 1: 程序化生成自定义武器

**场景**: 模组在剧情中给玩家一把预设计的传说武器?
`

`

`csharp
public ItemObject CreateLegendarySword()
{
    // 加载锻造模板（?单手??    CraftingTemplate template = CraftingTemplate.AllTemplates
        .FirstOrDefault(t =&gt; t.StringId == "one_handed_sword");
    if (template == null) return null;

    // 创建武器设计
    WeaponDesignElement[] pieces = new WeaponDesignElement[template.Pieces.Length];
    for (int i = 0; i &lt; pieces.Length; i++)
    {
        // 为每个槽位选最高级部件
        var availablePieces = CraftingPiece.AllPieces
            .Where(p =&gt; p.PieceType == template.Pieces[i].PieceType);
        CraftingPiece best = availablePieces
            .OrderByDescending(p =&gt; p.MeshLength)
            .First();
        pieces[i] = WeaponDesignElement.CreateFromPiece(best, 100);  // 100% 缩放
    }

    WeaponDesign design = new WeaponDesign(template, pieces);
    TextObject name = new TextObject("龙焰之剑");
    ItemObject weapon = new ItemObject(name);
    Crafting.GenerateItem(design, name, Hero.MainHero.Culture,
        null, ref weapon, "legendary_dragon_sword");

    return weapon;
}
`

`

`

**要点**: 

`CraftingTemplate.AllTemplates

` 获取所有模板；

`WeaponDesignElement.CreateFromPiece

` 创建部件元素；`GenerateItem

` 是静态方法无需实例?

`Crafting

`；`customId

` 必须唯一?
### 示例 2: 在锻?UI 中使?Crafting

**场景**: 模组自定义锻造界面，让玩家设计武器?
`

`

`csharp
public class CustomCraftingVM : ViewModel
{
    private Crafting _crafting;

    public CustomCraftingVM(CraftingTemplate template)
    {
        _crafting = new Crafting(template, Hero.MainHero.Culture,
            new TextObject("自定义武?));
        _crafting.Init();
    }

    public void OnPieceSelected(WeaponDesignElement piece)
    {
        _crafting.SwitchToPiece(piece);
        _crafting.UpdateHistory();
        RefreshStats();
    }

    public void OnUndo()
    {
        if (_crafting.Undo())
        {
            RefreshStats();
        }
    }

    public void OnCraft()
    {
        ItemObject weapon = _crafting.GetCurrentCraftedItemObject();
        MobileParty.MainParty.ItemRoster.AddToCounts(weapon, 1);
        InformationManager.DisplayMessage(
            new InformationMessage($"锻造了 {_crafting.CraftedWeaponName}"));
    }

    private void RefreshStats()
    {
        IEnumerable&lt;CraftingStatData&gt; stats = _crafting.GetStatDatas(0);
        // 更新 UI 显示属?    }
}
`

`

`

**要点**: 构造后必须?

`Init

`；每次修改后?

`UpdateHistory

` 才能撤销；`GetStatDatas(0)

` 获取主用法的属性；

`GetCurrentCraftedItemObject

` 生成最终物品?
### 示例 3: 导出/导入武器设计

**场景**: 玩家分享武器设计给其他玩家?
`

`

`csharp
public string ExportWeaponDesign(Crafting crafting)
{
    ItemObject item = crafting.GetCurrentCraftedItemObject();
    return crafting.GetXmlCodeForCurrentItem(item);
}

public void ImportWeaponDesign(string xmlCode)
{
    if (crafting.TryGetWeaponPropertiesFromXmlCode(xmlCode,
        out CraftingTemplate template,
        out ValueTuple&lt;CraftingPiece, int&gt;[] pieces))
    {
        // 用导入的模板和部件重建武?        WeaponDesignElement[] elements = pieces
            .Select(p =&gt; WeaponDesignElement.CreateFromPiece(p.Item1, p.Item2))
            .ToArray();
        WeaponDesign design = new WeaponDesign(template, elements);
        // 生成武器...
    }
}
`

`

`

**要点**: 

`GetXmlCodeForCurrentItem

` 返回可分享的 XML 字符串；

`TryGetWeaponPropertiesFromXmlCode

` 解析 XML 返回模板和部件（含缩放）；`ValueTuple&lt;CraftingPiece, int&gt;

` 是部?缩放百分比?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)