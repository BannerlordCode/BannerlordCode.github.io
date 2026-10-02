---
title: "CampaignOptionsControllerVM"
description: "持有战役选项列表的视图模型：按 priority index 排序、以 identifier 建索引、接上每一项的改值回调，并在“难度预设”下拉项与它所概括的那批选项之间维持双向一致。它由 CampaignOptionsManager 的共享缓存构造，并在 finalize 时清空该缓存。"
---
# CampaignOptionsControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class CampaignOptionsControllerVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsControllerVM.cs`

## 概述

`CampaignOptionsControllerVM` 是战役选项界面背后的模型。它接收一份已经填好的 `MBBindingList<CampaignOptionItemVM>`（通常由 `CampaignOptionsManager.GetGameplayCampaignOptions()` 构建），并在构造函数里做四件事：扫描出 `OptionData.GetIdentifier()` 等于 `"DifficultyPresets"` 的那一项，并把它当作 `SelectionCampaignOptionData`；用私有的 `CampaignOptionComparer` 按 `OptionData.GetPriorityIndex()` **就地**排序；构建 identifier → 条目的字典 `_optionItems`；以及对整个列表跑两遍 `RefreshDisabledStatus()` 与 `SetOnValueChangedCallback(OnOptionChanged)`。

真正的活逻辑是 `UpdatePresetData` 里的预设耦合。如果**预设**那一项变了，所有 `IsRelatedToDifficultyPreset()` 为真的选项都会被推到 `GetValueFromDifficultyPreset(preset)` 的值——但只对当时 `IsDisabled` 为 false 的条目生效，这正是防止预设把你（或别的 mod）已经关掉的选项重新打开的机制。反过来，如果**某个相关选项**变了，控制器会用 `FindOptionPresetForValue`（依次与 `Freebooter`、`Warrior`、`Bannerlord` 的预设值比较，否则为 `Custom`）反推当前值对应哪个预设，校验**所有**相关选项是否一致，然后把该预设写回；若不一致则写入 `3f`（`Custom`）。`_isUpdatingPresetData` 这个重入守卫标志让推/拉的递归更新得以终止。

## 心智模型

把它读成**“一份列表的持有者，外加一个下拉项与它所概括的选项之间的双向绑定”**：

- **它处在哪一层**：它是一个普通的 `ViewModel`，既不是 Screen 也不是 `CampaignBehaviorBase`。没有存档钩子，也没有战役 tick。它的生命周期恰好等于选项界面的生命周期，而它独占的唯一资源就是 `CampaignOptionsManager` 的那份共享缓存。
- **典型调用顺序**：某个 Screen 用 `CampaignOptionsManager.GetGameplayCampaignOptions()` 构建 `MBBindingList<CampaignOptionItemVM>` → 构造本控制器（排序、建索引、接回调）→ 把 `Options` 绑定到 Gauntlet 列表 → 销毁时 `OnFinalize` 先跑 `base.OnFinalize()`，再 `CampaignOptionsManager.ClearCachedOptions()`。
- **常见误用陷阱 —— 排序会改动调用方的那份列表**。`Options.Sort(...)` 是就地排序，而 `Options` 就是调用方传进来的列表。如果调用方直接把 `CampaignOptionsManager` 的缓存列表传进来，你刚刚重排的是全局缓存。
- **常见误用陷阱 —— `_difficultyPreset` 被假定非 null**。`UpdatePresetData` 在 `_optionItems.TryGetValue(...)` 里解引用 `_difficultyPreset.GetIdentifier()`，却没有先对 `_difficultyPreset` 本身判空。一个改掉预设项 identifier、或提供方集合里根本没有 `"DifficultyPresets"` 条目的 mod，会让**每一次**选项改动都变成 `NullReferenceException`。开头那个 `changedOption == null` 的提前返回并不能保护这条路径。
- **常见误用陷阱 —— `Options` setter 的引用相等判断**。`[DataSourceProperty] Options` 的 setter 只在 `value != _options`（引用比较）时触发 `OnPropertyChangedWithValue`。赋一个内容相等但不同的列表会静默改掉后备字段；重复赋同一实例则不会触发任何事件。
- **常见误用陷阱 —— 改了选项却不重算禁用状态**。`OnOptionChanged` 之所以要对所有条目重跑 `RefreshDisabledStatus()`，是因为别的 mod 的禁用判定可能依赖另一个选项的取值。你自己写选项回调时若跳过这一步，从属选项会一直显示为可用。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你要构建（或替换）战役选项界面，并希望白拿基础游戏的优先级排序、identifier 索引与难度预设耦合。
- 你贡献的选项需要参与预设体系——在你的 `ICampaignOptionData` 上实现 `IsRelatedToDifficultyPreset()` 与 `GetValueFromDifficultyPreset`。
- 你需要知道控制器认定的“预设相关选项”有哪些，以便预判一次预设改动会覆盖什么。

**不该用它的情况：**
- 你只想读取选项值。直接从 `CampaignOptionsManager` 读 `ICampaignOptionData`；为了读而构造这个控制器既重又会改动共享状态。
- 你想要按存档持久化的选项。战役选项是全局配置，本类与 `CampaignOptionsManager` 都不会把它们写进战役存档。
- 你的 provider 集合里没有 `"DifficultyPresets"` 项却仍要构造本控制器——见上面的 null 陷阱。

## 依赖关系

- [ViewModel](../../core-extra/ViewModel) —— 提供 `OnPropertyChangedWithValue`、`OnFinalize` 与 Gauntlet 层所绑定的 `[DataSourceProperty]` 管道的基类。
- [CampaignOptionItemVM](../CampaignOptionItemVM) —— 本控制器持有的单个选项条目：提供 `OptionData`、`RefreshDisabledStatus()`、`SetOnValueChangedCallback`、`SetValue` 与 `IsDisabled`。
- [CampaignOptionsManager](../CampaignOptionsManager) —— 产出该选项列表的注册表，也是本控制器在 finalize 时清理其共享缓存的对象。
- [ICampaignOptionData](../ICampaignOptionData) —— 单个选项的契约，其 `GetPriorityIndex`、`IsRelatedToDifficultyPreset`、`GetValueFromDifficultyPreset` 驱动排序与预设逻辑。
- [CampaignOptionsDifficultyPresets](../CampaignOptionsDifficultyPresets) —— 本控制器与之双向映射的四值枚举（`Freebooter`、`Warrior`、`Bannerlord`、`Custom`）。

## 主要成员

### `public MBBindingList<CampaignOptionItemVM> Options { get; set; }`（`[DataSourceProperty]`）

被绑定的列表。setter 仅在引用变化时触发 `OnPropertyChangedWithValue(value, "Options")`。Gauntlet XML 绑定的就是这个属性。
- **返回语义**：与构造函数传入的是同一个实例，且已被就地排序。

### `public CampaignOptionsControllerVM(MBBindingList<CampaignOptionItemVM> options)`

给 `Options` 赋值；找出预设项（`Options.FirstOrDefault(x => x.OptionData.GetIdentifier() == "DifficultyPresets")?.OptionData as SelectionCampaignOptionData`）；按 `GetPriorityIndex()` 排序；以 identifier 为键填充 `_optionItems`；对每个条目跑 `RefreshDisabledStatus()`；把 `OnOptionChanged` 装为每个条目的改值回调；用 `IsRelatedToDifficultyPreset()` 算出 `_difficultyPresetRelatedOptions`；最后对第一个相关选项调用一次 `UpdatePresetData(...)` 以确立初始预设值。
- **副作用**：调用方的列表被排序，且每个条目现在的改值回调都指向本控制器。被复用到另一个控制器的条目，其回调会被静默顶掉。
- **陷阱**：`options` 为 null 会立刻在 `FirstOrDefault` 上抛异常；若列表里没有 `"DifficultyPresets"` 项，则在首次交互时抛异常。

### `public override void OnFinalize()`

先 `base.OnFinalize()`，再 `CampaignOptionsManager.ClearCachedOptions()`。
- **这是所有权交还的时点**。由于选项列表就是管理器的共享缓存，跳过 finalize 会让下一个界面看到过期选项。如果由你自己托管本控制器，销毁时务必调用 `OnFinalize`（或 `ClearCachedOptions`）。

### `private void OnOptionChanged(CampaignOptionItemVM optionVM)`

装在每个条目上的回调。它调用 `UpdatePresetData(optionVM)`，然后对整个列表重跑 `RefreshDisabledStatus()`——因为一个选项的取值可能改变另一个选项的 `GetIsDisabledWithReason()` 结果。

### `private void UpdatePresetData(CampaignOptionItemVM changedOption)`

双向耦合的核心。当 `_isUpdatingPresetData` 已置位、`changedOption` 为 null、或 `_optionItems` 里没有预设 identifier 的条目时提前返回。随后：
- **预设变了**（`changedOption.OptionData == _difficultyPreset`）：对每个相关选项计算 `OptionData.GetValueFromDifficultyPreset((CampaignOptionsDifficultyPresets)_difficultyPreset.GetValue())` 并 `SetValue`——但仅当 `!value2.IsDisabled`。
- **相关选项变了**：用 `FindOptionPresetForValue` 从**第一个**相关选项推出候选预设，校验其余相关选项是否一致，然后对预设项 `SetValue(flag ? (float)candidate : 3f)`。
- `_isUpdatingPresetData` 在干活前置位、之后直线清零（**没有 `finally`**），因此若某次 `SetValue` 中抛异常，该标志会永久卡住，预设同步从此静默失效。

### `private CampaignOptionsDifficultyPresets FindOptionPresetForValue(ICampaignOptionData option)`

把 `option.GetValue()` 依次与 `Freebooter`、`Warrior`、`Bannerlord` 的 `GetValueFromDifficultyPreset` 结果比较；三者都不匹配则返回 `CampaignOptionsDifficultyPresets.Custom`。
- **注意**：它只查看 `option` **自身**的取值，而不是整组；组内一致性由调用方负责。

### `private class CampaignOptionComparer : IComparer<CampaignOptionItemVM>`

按 `x.OptionData.GetPriorityIndex().CompareTo(y.OptionData.GetPriorityIndex())` 排序。升序，无次级比较键，因此优先级相同的项保持源列表中的原有顺序。

### `internal const int AutosaveDisableValue = -1`

供选项数据表示“该项实际上禁用了自动存档”的哨兵值。它是 `internal`，因此对 ViewModelCollection 程序集可见，对 mod 程序集不可见。

## 使用示例

### 示例 1 —— 从一个 Screen 托管本控制器

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;
using TaleWorlds.Library;

public class MyOptionsScreen : ScreenBase
{
    private MBBindingList<CampaignOptionItemVM> _optionItems;
    private CampaignOptionsControllerVM _controller;

    public override void OnScreenInitialize()
    {
        base.OnScreenInitialize();

        // 先用共享注册表构建条目，再把列表交给控制器。
        _optionItems = new MBBindingList<CampaignOptionItemVM>();
        foreach (ICampaignOptionData data in CampaignOptionsManager.GetGameplayCampaignOptions())
        {
            _optionItems.Add(new CampaignOptionItemVM(data));
        }

        _controller = new CampaignOptionsControllerVM(_optionItems);
        GauntletScreen = ...;   // 在你的 prefab 中绑定 _controller.Options
    }

    public override void OnScreenFinalize()
    {
        // 清空共享的 CampaignOptionsManager 缓存；不要跳过。
        _controller.OnFinalize();
        _controller = null;
        base.OnScreenFinalize();
    }
}
```

### 示例 2 —— 一个参与难度预设的选项

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;

public class PartySizeOptionData : NumericCampaignOptionData
{
    public PartySizeOptionData()
        : base(identifier: "MyModPartySize",
               priorityIndex: 120,
               enableState: CampaignOptionEnableState.Enabled,
               getValue: () => SettingsStore.PartySize,
               setValue: v => SettingsStore.PartySize = v,
               minValue: 10f,
               maxValue: 400f,
               isDiscrete: true,
               getIsDisabledWithReason: () => new CampaignOptionDisableStatus(
                   isDisabled: SettingsStore.HardMode,
                   disabledReason: "Unavailable in Hard Mode"),
               // 下面两个成员正是控制器会去读的。
               isRelatedToDifficultyPreset: true,
               onGetValueFromDifficultyPreset: preset => preset switch
               {
                   CampaignOptionsDifficultyPresets.Freebooter => 60f,
                   CampaignOptionsDifficultyPresets.Warrior => 120f,
                   CampaignOptionsDifficultyPresets.Bannerlord => 200f,
                   _ => 120f,
               })
    {
    }
}
```

## 风险与崩溃边界

- **存档序列化**：没有。本控制器与 `CampaignOptionsManager` 都不参与战役存档系统；选项是全局配置，其真正的存储就是你构造 `ICampaignOptionData` 时传进去的那些委托。对 mod 的实际含义是：持久化由你自己负责——如果 `setValue` 委托只写了一个静态字段，该设置会随进程一起消失，且没有任何存档会记录某个战役是在哪些选项下创建的。
- **跨域依赖**：该类位于 ViewModelCollection 程序集，并伸入同程序集的 `CampaignOptionsManager`，又通过 `CampaignOptionItemVM` 触及 `CampaignOptionDisableStatus` 与本地化（`GameTexts.FindText`）。也就是说调用 `RefreshDisabledStatus()` 会碰到文本/本地化层，而该层必须已初始化——在无头或工具场景里这么做会失败。
- **加载时序**：构造阶段就是顺序隐患所在。它要求选项列表里**已经**含有 `"DifficultyPresets"` 条目，因为 `UpdatePresetData` 无保护地解引用 `_difficultyPreset`。请只在本游戏自身（及基础游戏）的 option provider 跑完之后再构造控制器；若用一份不完整的列表构造，你得到的不是构造时报错，而是首次用户交互时的 `NullReferenceException`。
- **ID 稳定性**：预设想按字面量字符串 `"DifficultyPresets"`（`_difficultyPresetsId`）定位。任何一个 mod 遮蔽、改名或删除该 identifier，都会破坏整个选项界面的耦合关系，而失败形态是 null 解引用，而不是一条清晰的诊断信息。
- **UI 生命周期 vs VM 生命周期**：这是一个 *VM*，不是 `MvBase`。它由托管它的 Screen 创建并终结，不存在自动的 `OnFinalize`。条目在销毁后仍持有指向本控制器的委托，因此对被保留条目的一次迟到 `SetValue` 会重新进入一个已终结控制器的 `UpdatePresetData`。finalize 时请把条目列表置空或释放。
- **`_isUpdatingPresetData` 外面没有 `finally`**。若预设推送过程中任何一次 `SetValue` 抛异常（mod 的 `setValue` 委托抛异常完全可能），重入守卫会一直停在 `true`，该界面余下的时间里预设下拉项都会静默地不再跟随选项。
- **`Custom` 被硬编码为 `3f`**。这个魔数今天确实等于 `CampaignOptionsDifficultyPresets.Custom`；如果未来版本调整了枚举顺序，“无匹配预设”的写入就会落到错误的条目上。

## 跨版本提示

- **v1.3.x → v1.4.5**：形态未变——构造函数接收 `MBBindingList<CampaignOptionItemVM>`，按 `GetPriorityIndex()` 排序，以 `GetIdentifier()` 建索引，预设同步使用 `CampaignOptionsDifficultyPresets`。`AutosaveDisableValue` 仍是 `internal const int -1`。
- **v1.4.5**：`OnFinalize` 仍在 `base.OnFinalize()` 之后调用 `CampaignOptionsManager.ClearCachedOptions()`。没有 `OnScreenTick` 或战役 tick 成员；所有响应性都来自 `CampaignOptionItemVM` 的改值回调。
- **v1.4.5**：identifier → 条目的字典没有公开访问器，也没有强制重算预设的公开途径。两者都是私有的；请通过条目自身的 setter 来驱动变化。

## 参见

- ↑ 父级目录：[ViewModel API 索引](../)
- ↔ 同级：[CampaignOptionItemVM](../CampaignOptionItemVM) —— 本控制器持有的单个选项条目
- ↔ 同级：[CampaignOptionsManager](../CampaignOptionsManager) —— 产出并被本控制器清理缓存的注册表
- ↔ 同级：[ICampaignOptionData](../ICampaignOptionData) —— 驱动排序与预设逻辑的单选项契约
- ↔ 同级：[CampaignOptionsDifficultyPresets](../CampaignOptionsDifficultyPresets) —— 四值预设枚举
- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel)
