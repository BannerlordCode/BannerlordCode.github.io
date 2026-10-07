---
title: "TooltipRefresherCollection"
description: "一个约 2200 行的静态提示框构建库，每种提示框对应一个 public 方法（英雄、聚落、队伍、军队、氏族、王国遭遇、物品、制作、攻城……）。每个方法接收一个 PropertyBasedTooltipVM 加上位置参数数组，设置提示框的 Mode，并追加属性。提示框的内容与可见性规则就实现在这里。"
---
# TooltipRefresherCollection

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public static class TooltipRefresherCollection`  
**Base:** 无  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/TooltipRefresherCollection.cs`

## 概述

`TooltipRefresherCollection` 是一个以静态类形式存在的命名空间，里面装着战役 UI 的每一个“刷新这个提示框”的例程。**19 个 public static 方法**（外加 4 个 private 辅助方法）遵循统一形态：调用方持有一个 `PropertyBasedTooltipVM`（widget 侧的可复用提示框对象），把它连同一个 `object[] args`（位置参数）传进去，方法（1）清空并重建提示框，（2）把 `Mode` 设为 widget 会解释的一个整数，（3）返回。这里不保存任何状态；每次调用都是基于当前战役状态的完整重建。19 个方法覆盖 `RefreshExplainedNumberTooltip`、`RefreshTrackTooltip`、`RefreshHeroTooltip`、`RefreshInventoryTooltip`、`RefreshCraftingPartTooltip`、`RefreshCharacterTooltip`、`RefreshItemTooltip`、`RefreshBuildingTooltip`、`RefreshAnchorTooltip`、`RefreshWorkshopTooltip`、`RefreshEncounterTooltip`、`RefreshSiegeEventTooltip`、`RefreshMapEventTooltip`、`RefreshSettlementTooltip`、`RefreshMobilePartyTooltip`、`RefreshArmyTooltip`、`RefreshClanTooltip`、`RefreshKingdomTooltip`、`RefreshMapMarkerTooltip`。**注意：18 个面向 `PropertyBasedTooltipVM`，只有 `RefreshExplainedNumberTooltip` 面向 `RundownTooltipVM`。**

那个 `Mode` 整数是可见性/权限通道，也是最需要理解的部分。`RefreshSettlementTooltip` 把模式展示得很清楚：若该聚落的地图派系与玩家交战则 `Mode = 3`；若它就是玩家自己的派系，或 `DiplomacyHelper.IsSameFactionAndNotEliminated` 判定为同派系，则 `Mode = 2`；否则 `Mode = 1`。Gauntlet prefab 针对不同 mode 绑定不同的可见性，因此选错 mode 会泄露玩家本不该看到的信息。有若干方法还会分支到 `Game.Current.IsDevelopmentMode` 来追加调试 id 与场景名——那是为此专门留的地方，不要自己另搞一套。

参数传递是位置式且不做检查的：`args[0] as Hero`、`args[1]` 转 `int`，以此类推。类型传错的表现是首次解引用时的 `NullReferenceException`，而不是一条参数错误。

## 心智模型

把它读成**“战役提示框的内容层：从战役状态到已填充提示框对象的纯函数”**：

- **它处在哪一层**：它位于战役模型与 Gauntlet widget 之间。widget 持有一个 `PropertyBasedTooltipVM`，在悬停目标变化时调用对应的 `Refresh*Tooltip` 并传入新的 args。本类拥有*显示什么文字、玩家被允许看到什么*；widget 拥有*在哪里、怎么画*。
- **mod 的典型调用顺序**：你通常不会直接调用它们。你通过给 widget 挂一个 `PropertyBasedTooltipVM` 并提供刷新入口来间接使用；对于自定义地图实体，请自行按 `RefreshMapMarkerTooltip` 的形态准备好 args 并调用，或者照着同样的形态写一个自己的 `Refresh*`。
- **常见误用陷阱 —— 忘了设置 `Mode`**。基类 `Mode` 并不是一个有意义的默认值 `1`；每个方法都刻意设置它，其取值编码了友方/敌对方/中立。照抄某个刷新方法却漏掉 `Mode` 赋值，会静默改变玩家能看到的内容。
- **常见误用陷阱 —— `args` 按位置依赖**。`RefreshHeroTooltip` 读 `args[0] as Hero` 与 `(bool)args[1]`；`RefreshEncounterTooltip` 把 `args[0]` 转成 `int`。参数顺序写错照样能编译通过（它们是 `object[]`），然后在运行时失败，或者更糟——带着垃圾数据成功。
- **常见误用陷阱 —— 这些方法假定 `Campaign.Current` 存在，且常常假定 `Hero.MainHero` / `PartyBase.MainParty` 存在**。若干方法会在无保护的情况下解引用 `Campaign.Current.Models`、`Hero.MainHero`、`PartyBase.MainParty` 或 `PlayerEncounter.Current`。从无头环境、主菜单或加载界面调用它们会抛异常。
- **常见误用陷阱 —— `RefreshEncounterTooltip` 里的 `PlayerEncounter.Current`**。它无条件解引用 `PlayerEncounter.EncounteredParty.MobileParty`。在遭遇之外这是一条 null 路径，而不是优雅的“无数据”。
- **常见误用陷阱 —— 以为提示框会自己清空**。`PropertyBasedTooltipVM.Refresh()` 会先清空 `TooltipPropertyList` 再调用刷新方法，并仅在结果列表非空时置 `IsActive`。如果你绕过 `Refresh()` 直接调用某个 `Refresh*Tooltip`，上一个提示框的条目还在，你会往上追加。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你要给自定义 widget 加悬停提示框，并希望沿用基础游戏对该实体种类施加的同一套内容与信息隐藏规则。
- 你要给 `PropertyBasedTooltipVM` 挂刷新入口，想复用某个已有构建器。
- 你要写自己的刷新方法，想照抄既有形态：设置 `Mode`、用 `TooltipPropertyFlags` 调 `AddProperty`、数据缺失时提前返回。

**不该用它的情况：**
- 你需要 *rundown* 提示框（那种 “explained number” 弹出框）。那走 `RefreshExplainedNumberTooltip`，它接收的是 `RundownTooltipVM`——另一个 widget 类——而不是 `PropertyBasedTooltipVM`。
- 你需要某个游戏没有对应方法的数据源。请自己写；不要用错误的 `args[0]` 去滥用不相干的 `Refresh*`。
- 你身处没有战役的环境（主菜单、模块加载、专用服务器）。这些是战役视图层助手，假定战役状态存在。

## 依赖关系

- [PropertyBasedTooltipVM](../../core-extra/PropertyBasedTooltipVM) —— 这些方法所填充的 widget 侧提示框对象；`Mode`、`AddProperty` 与 `TooltipPropertyFlags` 取值决定 prefab 渲染什么。
- [TooltipProperty](../../core-extra/TooltipProperty) —— 每一条被追加的属性行及其 `TooltipPropertyFlags`（`Title`、`Cost`、`MultiLine`、`DefaultSeperator` 等）。
- [Campaign](../../campaign/Campaign) —— 若干刷新方法会读取 `Campaign.Current` 与 `Campaign.Current.Models`（地图追踪、外交、聚落归属）。
- [CampaignUIHelper](../CampaignUIHelper) —— 提供 `SortState` 以及本类为制作资源去重而复用的 `ProductInputOutputEqualityComparer`。
- [MobilePartyPrecedenceComparer](../MobilePartyPrecedenceComparer) —— 同桶的配套比较器，当你需要与提示框相同的排序时可用。
- [MBSubModuleBase](../../core/MBSubModuleBase) —— 拥有你自定义屏幕与 widget 生命周期的 mod 入口点。
- [CharacterObject](../../campaign/CharacterObject) —— `RefreshCharacterTooltip` 的 `args[0]`，是共享的**兵种模板**而不是具体士兵。
- [Building](../../campaign/Building) / [BuildingType](../../campaign/BuildingType) —— `RefreshBuildingTooltip` 的 `args[0]` 及其类型；`IsDailyProject` 与 `Explanation` 都挂在类型上。
- [Workshop](../../campaign/Workshop) / [WorkshopType](../../campaign/WorkshopType) —— `RefreshWorkshopTooltip` 的 `args[0]` 及其类型；`Productions` 是类型上的静态定义。
- [AnchorPoint](../../campaign/AnchorPoint) —— `RefreshAnchorTooltip` 的 `args[0]`，只有 `Name` 可显示。
- [AgentDrivenProperties](../../mission-ext/AgentDrivenProperties) —— 战斗中的属性由 `AgentDrivenProperties` 持有；`RefreshCharacterTooltip` 显示的是**模板**，两者不要混。

## 主要成员

### `public static void RefreshHeroTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` 是 `Hero`，`args[1]` 是 `bool`（alt/检视模式）。它设置提示框的名称/描述字符串，然后选定 `Mode`：与 `Hero.MainHero` 交战时 `3`，玩家本人或友方时 `2`，其余 `1`。它还会查询 `CampaignUIHelper.IsHeroInformationHidden(hero, out disableReason)`，并在英雄信息被游戏状态隐藏时把原因显示出来。

### `public static void RefreshSettlementTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` 是 `Settlement`。当 `settlement.Party` 为 null 时提前返回。根据外交关系选定 `Mode`（交战 `3`，同派系或 `DiplomacyHelper.IsSameFactionAndNotEliminated` 为真 `2`，否则 `1`）。在开发模式下追加聚落 id，并对要塞/城镇/村庄追加解析出的场景名与城墙等级。

### `public static void RefreshMobilePartyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

构建队伍悬停卡片：名称、氏族、成员与俘虏名册、食物、士气与速度，其中名册部分委托给私有的 `AddPartyTroopProperties(..., Func<TroopRoster> funcToDoBeforeLambda = null)`。

### `public static void RefreshArmyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

构建军队悬停卡片：军队名称、氏族、总兵力、成员队伍，以及（海军情形下）通过私有 `AddPartyShipProperties(...)` 统计的船只数量。

### `public static void RefreshClanTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` 是 `Clan`。追加氏族名称、层级、领地、成员、领主与所属王国，并根据对玩家的外交立场选定 mode。

### `public static void RefreshKingdomTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` 是 `Kingdom`。追加王国名称、旗帜、氏族、聚落与统治氏族。

### `public static void RefreshEncounterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` 是一个 `int`，用于选择查看哪一方（`0` = 玩家方，`1` = 遭遇方）。它用 `MobileParty.MainParty` 与 `PlayerEncounter.EncounteredParty.MobileParty` 初始化两份队伍列表，调用 `PlayerEncounter.Current.FindAllNpcPartiesWhoWillJoinEvent(...)` 填充 NPC 方，据此把 `Mode` 设为 `2` 或 `3`，并把成员/俘虏名册汇总进用于显示的虚拟 `TroopRoster`。
- **陷阱**：上面每一个都是对活的遭遇状态的无保护解引用。

### `public static void RefreshItemTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

文件中最大的方法。`args[0]` 是 `ItemObject`；它遍历制作部件、替代用途、加成与减益，每行追加一条 `TooltipProperty`，并就数值查询制作模型。

### `public static void RefreshInventoryTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

为库存交易行追加重量、价值、容量修正，以及与具体角色相关的槽位/装备上下文。

### `public static void RefreshCraftingPartTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

追加某物品所需的制作材料，使用 `itemCategoryDistinctComparer`（一个 `CampaignUIHelper.ProductInputOutputEqualityComparer`），使共享同一 `ItemCategory` 的投入被合并而不是重复列出。

### `public static void RefreshCharacterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`TooltipRefresherCollection.cs:412`。`args[0]` 是 `CharacterObject`（用 `as` 解包后**立即解引用，没有判空**）。这是「士兵模板卡片」而不是「某个具体士兵」的提示框：它描述的是**兵种模板**，不是场上那一个 Agent。

流程固定为五段：

1. `Mode = 1`——**固定中立，无外交分支**。这跟 `RefreshHeroTooltip` / `RefreshSettlementTooltip` 的三档 mode 形成对比：兵种卡片对谁都一样可见，所以没必要分敌我。
2. 标题行：`characterObject.Name.ToString()` 带 `TooltipPropertyFlags.Title`。
3. 兵种等级：取 `str_party_troop_tier` 文本，把 `TIER_LEVEL` 变量设为 `characterObject.Tier`。
4. **仅当 `characterObject.UpgradeTargets.Length != 0`** 才追加升级经验行。它调用 `GameTexts.SetVariable("XP_AMOUNT", characterObject.GetUpgradeXpCost(PartyBase.MainParty, 0))`——**升级费用是按玩家主力部队算的**，所以同一张卡片在战役外或主力部队不存在时会抛异常。注意第二个参数写死 `0`，即**只显示升到下一级的费用**，不是满级费用。
5. 技能表：只要 `characterObject.TroopWage > 0` 就显示日薪（带一枚金币图标的内嵌 img 标签），随后遍历 `Skills.All`，**只列出 `GetSkillValue(item) > 0` 的技能**——零值技能被整体跳过，而不是显示成 0。

- **什么时候用**：给兵种选择界面、招募界面、部队编辑界面上的「兵种」格子加悬停提示。
- **什么时候不要用**：想知道场上某个具体士兵的当前负重/当前生命，那属于 `AgentDrivenProperties` 而不是 `CharacterObject`；也不要拿它显示单个 Agent 的名字以外的状态，因为 `CharacterObject` 是**共享模板**，上面没有个体状态。
- **两个坑**：一是 `GameTexts.SetVariable` 写的是**全局文本变量**，不是局部变量——紧跟着显示别的提示框会看到被污染的文本；二是 `Skills.All` 是全局技能表，加了新技能 mod 之后这张卡片会自己多出几行，不需要改这里。

### `public static void RefreshBuildingTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`TooltipRefresherCollection.cs:674`。`args[0]` 是 `Building`（`as` 解包后无判空）。这是城镇里**某栋具体建筑实例**的卡片，`Mode = 1`。

四行内容，其中第二行有一个分支：

- 标题：`building.Name.ToString()`，带 `Title` 标志。
- **若 `building.BuildingType.IsDailyProject` 为真，只写一行 `Daily`**；否则写 `Current Level: {building.CurrentLevel}`。也就是说每日项目类建筑（进度条型，如工坊/训练场）的卡片**故意不显示等级**——它的进度由别处表达，`CurrentLevel` 对它没有意义。
- `building.Explanation.ToString()`，带 `MultiLine` 标志（这是建筑类型自己写的长描述文本，天然多行）。
- `building.GetBonusExplanation().ToString()`，普通单行。

- **什么时候用**：城镇界面 / 地图上悬停一栋具体建筑（铁匠铺、铁匠炉、训练场……）。
- **什么时候不要用**：想知道「这座建筑提供什么效果」——那是 `BuildingType` 的事，不是 `Building` 实例；本方法只描述**这一个实例**的当前状态。
- **注意 `building.Name` 与 `building.BuildingType.Name` 是两个东西**。本方法用的是实例名（可以被 mod 改），而下一条 `RefreshWorkshopTooltip` 用的是类型名。想统一显示类型名，得自己改。

### `public static void RefreshAnchorTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`TooltipRefresherCollection.cs:691`。**全文最短的方法，只有三句**：

```csharp
AnchorPoint anchorPoint = args[0] as AnchorPoint;
propertyBasedTooltipVM.Mode = 1;
propertyBasedTooltipVM.AddProperty("", anchorPoint.Name.ToString, 0, TooltipProperty.TooltipPropertyFlags.Title);
```

它只做两件事：设 `Mode = 1`，加一条带 `Title` 标志的名称属性。**没有第二行内容、没有条件分支、没有任何 `Campaign.Current` 依赖。**

- **什么时候用**：海上航行时悬停一个舰队锚点（玩家可以把舰队调过去的那个可交互点）。锚点本身除了名字没有别的可显示数据——没有归属、没有部队、没有等级——所以游戏只给一行标题。
- **什么时候不要用**：想要锚点的更多上下文（当前有哪些舰队能去、航程多远）——游戏没有提供这个提示框，别指望改 `args` 就能挖出来。
- **它是写自定义提示框的最小模板**。想写自己的 `Refresh*`，照抄这五行比照抄 `RefreshHeroTooltip`（近 200 行）安全得多：没有全局状态依赖、没有 LINQ、没有分配。当然它也是**最脆弱的模板**——`args[0]` 为 null 或类型不符时立刻 `NullReferenceException`，因为它连 `Mode` 之后的第一处解引用都没有保护。可以和同样只写标题的 `RefreshMapMarkerTooltip`（`:2189`，`MapMarker`）对照看，两者形状完全一致。

### `public static void RefreshWorkshopTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`TooltipRefresherCollection.cs:698`。`args[0]` 是 `Workshop`（城镇里一座具体的工坊实例）。`Mode = 1`。

与 `RefreshBuildingTooltip` 的关键区别是**标题取自类型而非实例**：

- 标题：`workshop.WorkshopType.Name.ToString()`（类型名，如「铁匠铺」），带 `Title` 标志。
- `Owner` 行：`workshop.Owner.Name.ToString()`。
- 空行 + `Productions` 小节标题 + 空行。
- **原料（Materials）**：把 `workshop.WorkshopType.Productions` 里每条 `Production` 的 `Inputs` 用 `SelectMany` 摊平，再过 `Distinct(itemCategoryDistinctComparer)` 去重。有原料时逐行 `AddProperty(" ", category.GetName())`。注意去重比较器就是类字段 `itemCategoryDistinctComparer`（`CampaignUIHelper.ProductInputOutputEqualityComparer`），所以**同时是多种产物原料的物品类别只会出现一次**。
- **产物（Production）**：同样的摊平 + 去重流程。如果产物列表为空，方法在这里**提前 return**，整张卡片就只有标题、Owner 和一个空的 `Productions` 小节标题。

- **什么时候用**：城镇界面里悬停一座具体工坊。想显示「这座城镇现在有什么产能」。
- **什么时候不要用**：想知道工坊当前**实际产出了多少、库存多少**——本方法只列 `WorkshopType.Productions` 这个**静态定义**，不读 `Town.Workshops` 的运行时产出状态，也不读任何进度。
- **两个坑**：一是 `workshop.Owner` **未判空**，无主工坊会直接 `NullReferenceException`；二是每行的 `AddProperty` 只有一个参数（`AddProperty(" ", name)`），靠**前导空格**做缩进而非 `TooltipPropertyFlags`——照抄这个形态时注意别以为漏了参数。
- **`Productions` 的静态性意味着 mod 改产能必须改 `WorkshopType.Productions`**，而不是改某个 `Workshop` 实例；否则这张提示框不会变。

### `public static void RefreshSiegeEventTooltip(...)` / `RefreshMapEventTooltip(...)`

两者都在 `args[0]` 里取一个数字事件类型并对其 switch，追加攻城/地图事件特有的属性。未知类型会落到 default 分支，产生一个近乎空的提示框而不是报错。

### `public static void RefreshExplainedNumberTooltip(RundownTooltipVM explainedNumberTooltip, object[] args)`

唯一面向 **`RundownTooltipVM`** 而非 `PropertyBasedTooltipVM` 的方法。`args[0]` 与 `args[1]` 是 `Func<ExplainedNumber>`；第二个仅在提示框 `IsExtended` 时使用。它设置 `CurrentExpectedChange`，并用 `explainedNumber.GetLines()` 重建 `Lines`。
- **注意这里的防御风格**：它检查 `explainedNumberTooltip.IsInitializedProperly` 后提前返回，而多数 `PropertyBasedTooltipVM` 刷新方法并不这么做。

### `public static void RefreshMapMarkerTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

最小参考实现：`args[0]` 是 `MapMarker`，`Mode = 1`，用 `TooltipPropertyFlags.Title` 追加一条名称属性。写自己的刷新方法时照抄这个形态。

### `public static void RefreshTrackTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` 是 `Track`。读取 `Campaign.Current.Models.MapTrackModel`；若该模型为 `null` 就立即返回且不触碰提示框。设置 `Mode = 1`，追加追踪标题，再为每条描述追加一个属性。

### 值得了解的私有辅助方法

#### `private static void AddPartyTroopProperties(PropertyBasedTooltipVM propertyBasedTooltipVM, TroopRoster troopRoster, TextObject title, bool isInspected, Func<TroopRoster> funcToDoBeforeLambda = null)`

多个队伍/军队/遭遇刷新方法共用的名册段落。`funcToDoBeforeLambda` 这个钩子允许调用方在渲染前一刻改写或重读名册——当你需要实时数值时，这就是设计好的扩展点。

#### `private static void AddEncounterParties(...)`（两个重载）

一个接收 `MBReadOnlyList<PartyBase>`，一个接收 `MBReadOnlyList<MapEventParty>`。两者都渲染双方队伍对比，并遵循 `isExtended` 标志。

## 使用示例

### 示例 1 —— 用基础游戏所用的机制绑定你的 widget

`PropertyBasedTooltipVM` 是按*类型*解析刷新器的：构造函数接收一个静态类的 `Type`，该静态类上要有签名匹配的 `public static void Xxx(PropertyBasedTooltipVM, object[])` 方法，`InvokeRefreshData` 再以反射调用它。

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;
using TaleWorlds.Core.ViewModelCollection.Information;

public class MyTooltipHost
{
    private readonly PropertyBasedTooltipVM _tooltip;

    public MyTooltipHost()
    {
        // 该 VM 会按名字查找 RefreshHeroTooltip(PropertyBasedTooltipVM, object[])。
        _tooltip = new PropertyBasedTooltipVM(
            typeof(TooltipRefresherCollection), new object[0]);
    }

    public PropertyBasedTooltipVM Tooltip => _tooltip;

    public void ShowFor(Hero hero, bool isAltHeld)
    {
        // Refresh() 会清空 TooltipPropertyList、调用刷新器，然后激活。
        _tooltip.IsActive = false;
        _tooltip.TooltipPropertyList.Clear();
        TooltipRefresherCollection.RefreshHeroTooltip(
            _tooltip, new object[] { hero, isAltHeld });
    }
}
```

### 示例 2 —— 你自己的刷新器，沿用既有形态

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core.ViewModelCollection.Information;

public static class MyTooltipRefreshers
{
    public static void RefreshMyMapEntityTooltip(PropertyBasedTooltipVM vm, object[] args)
    {
        var entity = args[0] as MyMapEntity;
        if (entity == null)
        {
            return;                       // 与基础方法相同的防御性提前返回
        }

        vm.Mode = 1;                      // 中立可见性
        vm.AddProperty("", entity.Name.ToString(), 0,
                       TooltipProperty.TooltipPropertyFlags.Title);
        vm.AddProperty("Owner", entity.Clan.Name.ToString());
        vm.AddProperty("Strength", entity.TotalStrength.ToString());
    }
}
```

### 示例 3 —— 用实时取值钩子复用名册渲染

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core.ViewModelCollection.Information;

public static class MyArmyTooltip
{
    public static void Refresh(PropertyBasedTooltipVM vm, object[] args)
    {
        Army army = args[0] as Army;
        if (army == null)
        {
            return;
        }

        vm.Mode = 1;
        vm.AddProperty("", army.Name.ToString(), 0,
                       TooltipProperty.TooltipPropertyFlags.Title);

        // 聚合军队成员的真实写法（对照 RefreshArmyTooltip 内的局部函数 GetTempRoster，
        // TooltipRefresherCollection.cs:1412-1429）：
        //   军队没有自己的 MemberRoster，要从 army.LeaderParty.MemberRoster 起步，
        //   再把每个 AttachedParties 的成员也加进来。
        //   注意 Army 上并没有 GetLeaderCharacter() 这样的方法。
        TroopRoster roster = TroopRoster.CreateDummyTroopRoster();

        for (int i = 0; i < army.LeaderParty.MemberRoster.Count; i++)
        {
            TroopRosterElement element = army.LeaderParty.MemberRoster.GetElementCopyAtIndex(i);
            roster.AddToCounts(element.Character, element.Number,
                               insertAtFront: false, element.WoundedNumber);
        }

        foreach (MobileParty attachedParty in army.LeaderParty.AttachedParties)
        {
            for (int j = 0; j < attachedParty.MemberRoster.Count; j++)
            {
                TroopRosterElement attached = attachedParty.MemberRoster.GetElementCopyAtIndex(j);
                roster.AddToCounts(attached.Character, attached.Number,
                                   insertAtFront: false, attached.WoundedNumber);
            }
        }

        TooltipRefresherCollection.RefreshArmyTooltip(vm, new object[] { army });
    }
}
```

## 风险与崩溃边界

- **存档序列化**：按设计没有。这里没有任何东西写入 `IDataStore` 或从战役存档读取；每个提示框都在每次悬停时基于活的战役状态重建。这意味着提示框*总是*与当前世界一致——但也意味着提示框显示的任何内容都不是持久的，提示框永远无法用来确定某个存档“曾经包含”什么。不要指望缓存的 `PropertyBasedTooltipVM` 能跨存档存活；它归 widget 所有。
- **跨域依赖**：本类引入 `TaleWorlds.CampaignSystem.Party`、`.Settlements`、`.Encounters`、`.Siege`、`.Naval`、`.MapEvents`、`.Inventory`、`.Roster`、`.Buildings`、`.Workshops` 以及本地化。它是战役视图层的叶子：纯战役模型中不应有任何东西引用它。为了在 `CampaignBehaviorBase` 里拼 UI 字符串而引用它，会把层次倒置，并使该行为在无头环境下不可用。
- **加载时序**：每个方法都假定 `Campaign.Current` 存在且模型已填充。在战役初始化之前、或战役销毁之后调用任何刷新器都会解引用 null。`RefreshTrackTooltip` 是唯一会对自己要用的模型判 null 的。
- **ID 稳定性**：这里没有 id，但那些 `Mode` 整数**就是**与 Gauntlet prefab 之间的隐式契约。它们是没有命名常量的裸 `int` 字面量（`1`、`2`、`3`、`0`）；如果你自己写刷新器并采用另一套约定，你不会得到编译错误，而是得到一个什么都不显示的提示框。
- **UI 生命周期**：这些方法会把自己收到的提示框完全重新填充，但**不会**自行清空——`RefreshExplainedNumberTooltip` 会调 `Lines.Clear()`，而 `PropertyBasedTooltipVM` 系列方法依赖 `PropertyBasedTooltipVM.Refresh()` 事先清空 `TooltipPropertyList`。若你绕过 `Refresh()` 直接调用刷新器，请自行确认旧内容已消失，否则你会在脏提示框上继续追加。
- **热路径开销**。`RefreshMobilePartyTooltip` / `RefreshArmyTooltip` / `RefreshEncounterTooltip` 每次悬停都会分配 `List<MobileParty>`、虚拟 `TroopRoster` 与装箱的 `TextObject`。每帧而非悬停变化时调用它们，会造成可观的帧时间开销。
- **无保护的活状态解引用**。`RefreshEncounterTooltip` 要求存在进行中的 `PlayerEncounter`；`RefreshHeroTooltip` 要求存在 `Hero.MainHero`。两者都没有检查。从可能在这些上下文之外打开的菜单触发提示框刷新会导致崩溃。

## 跨版本提示

- **v1.3.x → v1.4.5**：本类通过新增刷新器（在作坊、海军船只区段、建筑、角色等）不断扩充，同时保持 `(PropertyBasedTooltipVM, object[])` 签名稳定。既有调用点无需改动。
- **v1.4.5**：`RefreshExplainedNumberTooltip` 仍是唯一面向 `RundownTooltipVM` 的方法；其余全部面向 `PropertyBasedTooltipVM`。`itemCategoryDistinctComparer` 字段仍只从 `CampaignUIHelper.ProductInputOutputEqualityComparer` 初始化一次。
- **v1.4.5**：不存在接收强类型参数列表的 `Refresh*Tooltip` 重载，也没有 `Clear` / `Reset` 辅助方法。`object[]` 约定未变。

## 参见

- ↑ 父级目录：[ViewModel API 索引](../)
- ↑ VM 基类：[PropertyBasedTooltipVM](../../core-extra/PropertyBasedTooltipVM) —— 这些方法所填充的 widget 对象
- ↔ 同级：[TooltipProperty](../../core-extra/TooltipProperty) —— 被追加的属性行与标志
- ↔ 同级：[CampaignUIHelper](../CampaignUIHelper) —— 此处复用的比较器与枚举助手
- ↔ 同级：[MobilePartyPrecedenceComparer](../MobilePartyPrecedenceComparer) —— 为同一批提示框服务的配套比较器
- ↔ 跨桶：[Campaign](../../campaign/Campaign) —— 这些方法读取的 `Campaign.Current` 状态
- ↑ 钩子声明：[MBSubModuleBase](../../core/MBSubModuleBase)
