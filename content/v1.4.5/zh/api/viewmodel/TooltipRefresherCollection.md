---
title: "TooltipRefresherCollection"
description: "一个约 2200 行的静态提示框构建库，每种提示框对应一个 public 方法（英雄、聚落、队伍、军队、氏族、王国遭遇、物品、制作、攻城……）。每个方法接收一个 PropertyBasedTooltipVM 加上位置参数数组，设置提示框的 Mode，并追加属性。提示框的内容与可见性规则就实现在这里。"
---
# TooltipRefresherCollection

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public static class TooltipRefresherCollection`  
**Base:** 无  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TooltipRefresherCollection.cs`

## 概述

`TooltipRefresherCollection` 是一个以静态类形式存在的命名空间，里面装着战役 UI 的每一个“刷新这个提示框”的例程。约 30 个 public 方法遵循统一形态：调用方持有一个 `PropertyBasedTooltipVM`（widget 侧的可复用提示框对象），把它连同一个 `object[] args`（位置参数）传进去，方法（1）清空并重建提示框，（2）把 `Mode` 设为 widget 会解释的一个整数，（3）返回。这里不保存任何状态；每次调用都是基于当前战役状态的完整重建。方法覆盖 `RefreshHeroTooltip`、`RefreshSettlementTooltip`、`RefreshMobilePartyTooltip`、`RefreshArmyTooltip`、`RefreshClanTooltip`、`RefreshKingdomTooltip`、`RefreshEncounterTooltip`、`RefreshItemTooltip`、`RefreshInventoryTooltip`、`RefreshCraftingPartTooltip`、`RefreshWorkshopTooltip`、`RefreshSiegeEventTooltip`、`RefreshMapEventTooltip`、`RefreshMapMarkerTooltip`、`RefreshTrackTooltip`、`RefreshAnchorTooltip`、`RefreshCharacterTooltip`、`RefreshBuildingTooltip`、`RefreshExplainedNumberTooltip` 等等。

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
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core.ViewModelCollection.Information;

public static class MyArmyTooltip
{
    public static void Refresh(PropertyBasedTooltipVM vm, object[] args)
    {
        var army = (Army)args[0];
        TroopRoster roster = TroopRoster.CreateDummyTroopRoster();
        roster.AddToCounts(army.GetLeaderCharacter(), 1);

        vm.Mode = 1;
        vm.AddProperty("", army.Name.ToString(), 0,
                       TooltipProperty.TooltipPropertyFlags.Title);

        // 名册会在渲染前一刻通过钩子重新读取。
        PropertyBasedTooltipVM target = vm;
        Action render = () => TooltipRefresherCollection.RefreshArmyTooltip(target, new object[] { army });
        render();
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
