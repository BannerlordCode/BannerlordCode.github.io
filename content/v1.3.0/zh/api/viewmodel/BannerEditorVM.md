---
title: "BannerEditorVM"
description: "纹章编辑器 VM：构造器把 Banner.Serialize() 存成初值快照，ExecuteCancel 用它反序列化回滚，ExecuteDone 只调 onExit(false) —— 编辑期间 Banner 对象本身一直被就地改写。"
---

# BannerEditorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs`（全文 1087 行）

## 概述

它是纹章编辑器（角色创建阶段与王国界面两处都用）的数据源，**31 个绑定属性 + 1 个只读属性 + 3 个 public 字段 + 12 个 public 方法**。但它真正的核心只有三行代码的语义：

```csharp
this._initialBanner = banner.Serialize();   // 构造器第一句：快照
...
public void ExecuteDone()   { this.OnExit(false); }
public void ExecuteCancel() { this._banner.Deserialize(this._initialBanner); this.OnExit(true); }
```

**这是全页最重要的一件事：编辑期间 `Banner` 对象被就地改写，不是改在副本上。** 每一次选图标、选颜色、改尺寸都直接落到构造器传进来的那个 `Banner` 实例上——`BannerVM.Banner.SetIconMeshId(...)` / `SetPrimaryColorId(...)` / `SetIconColorId(...)` / `SetIconSize(...)`，然后调 `_refresh()` 让界面重画。**只有取消时才用 `_initialBanner` 快照还原。** 所以「谁构造了它、谁持有那个 `Banner`」直接决定了取消能不能真的回滚。

## 心智模型

**把它想成「一个对外部 `Banner` 对象的就地编辑器 + 一个一次性的撤销快照」，而不是一个拥有纹章的对象。**

**第一步，理解构造器的八个参数各自买断了什么。**

```csharp
public BannerEditorVM(BasicCharacterObject character, Banner banner, Action<bool> onExit,
    Action refresh, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int> goToIndex)
```

- `character` → 存进只读属性 `Character`，并在 `FindShield()` 里**找一面盾**（先扫四个装备槽，找不到就遍历 `Game.Current.ObjectManager.GetObjectTypeList<ItemObject>()` 找第一面 `PrimaryWeapon.IsShield && IsUsingTableau` 的盾；再找不到就 `Debug.FailedAssert`）。
- `banner` → 存 `this._banner`，**并且立刻 `banner.Serialize()` 存成 `_initialBanner`**。
- `onExit` → `Action<bool>`，**布尔值表示「是不是被取消了」**。`ExecuteDone` 传 `false`，`ExecuteCancel` 传 `true`。
- `refresh` → 每次改动后调一次，让宿主重画角色与盾。
- 三个阶段索引 → `CurrentStageIndex` / `TotalStageCount` / `FurthestIndex`，是**角色创建向导**（一个 VM 服务多个阶段）的共享状态。
- `goToIndex` → `ExecuteGoToIndex(int)` 的唯一实现，`this._goToIndex(index)`。**`goToIndex` 为 null 时点击会 NRE。**

**第二步，理解 `ExecuteCancel()` 的顺序。** 先 `Deserialize(_initialBanner)` 还原 `Banner`，**再** `OnExit(true)`。顺序很重要：宿主在 `onExit` 回调里会重画，所以必须先还原再通知。

**第三步，理解 `ExecuteSwitchColors()` 换的是什么。** 它不只是交换两个列表的引用：

```csharp
this.PrimaryColorList = this.SigilColorList;
this.SigilColorList = primaryColorList;
// 逐项改 selection 回调
this.PrimaryColorList.ApplyActionOnAllItems(x => x.SetOnSelectionAction(this.OnPrimaryColorSelection));
this.SigilColorList.ApplyActionOnAllItems(x => x.SetOnSelectionAction(this.OnSigilColorSelection));
// 交换两个"当前选中"
this._currentSelectedPrimaryColor = this._currentSelectedSigilColor;
this._currentSelectedSigilColor = currentSelectedPrimaryColor;
// 写回 Banner
this.BannerVM.Banner.SetPrimaryColorId(this._currentSelectedPrimaryColor.ColorID);
this.BannerVM.Banner.SetSecondaryColorId(this._currentSelectedPrimaryColor.ColorID);
this.BannerVM.Banner.SetIconColorId(this._currentSelectedSigilColor.ColorID);
this._refresh();
```

**注意 `SetPrimaryColorId` 和 `SetSecondaryColorId` 被写成了同一个值。** 背景色同时填主色与次色槽——这是纹章模型的语义（底色两槽同值）。

两个列表本来就有不同来源：`RefreshValues()` 按 `BannerColor.PlayerCanChooseForBackground` / `PlayerCanChooseForSigil` 分流。**有些颜色只能用于其中一种用途**，所以切换之后两个列表的内容并不相同。

**第四步，理解 `IsColorsSwitched()` 这个判据。**

```csharp
private bool IsColorsSwitched()
{
    foreach (KeyValuePair<int, BannerColor> kv in BannerManager.Instance.ReadOnlyColorPalette)
    {
        if (kv.Value.PlayerCanChooseForBackground && kv.Key == this._banner.GetPrimaryColorId())
        {
            return false;
        }
    }
    return true;
}
```

**只有当前主色在「可用于背景」的调色板里，才算未交换。** 否则（比如玩家选了只能做徽记的颜色做主色）就当作已交换——此时 `RefreshValues()` 会把两个颜色列表按「徽记调色板 → 背景列表」的方向构建。

**第五步，理解 `CurrentIconSize` 的 setter 带副作用，而且是延迟的：**

```csharp
public int CurrentIconSize
{
    get { return this._currentIconSize; }
    set
    {
        if (value != this._currentIconSize)
        {
            this._currentIconSize = value;
            base.OnPropertyChangedWithValue(value, "CurrentIconSize");
            if (this._initialized) { this.OnBannerIconSizeChange(value); }
        }
    }
}
```

`_initialized` 是构造器**最后一句** `RefreshValues()` 末尾设的（`this._initialized = true;`）。**在 `RefreshValues()` 内部给 `CurrentIconSize` 赋值时 `_initialized` 还是 false，所以那次赋值不会触发 `Banner.SetIconSize`。** 这是防止初始化过程意外改纹章的守卫——**本批里最精细的一处 setter 设计**。

`OnBannerIconSizeChange(newSize)` 做两件事：`Banner.SetIconSize(newSize)` + `_refresh()`。

## 关键成员

### 生命周期

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public BannerEditorVM(BasicCharacterObject character, Banner banner, Action<bool> onExit, Action refresh, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int> goToIndex)` | 八参数。**`MinIconSize = 100` / `MaxIconSize = 700` 在这里硬编码**（不是从纹章模型读）。末尾调 `RefreshValues()`。 |
| `RefreshValues` | `public override void RefreshValues()` | 建四个 `HintViewModel`（`ResetHint` / `RandomizeHint` / `UndoHint` / `RedoHint`，**第二个参数全是 `null`**）；建三段文案；**重建 `CategoryNames` 并遍历 `BannerManager.Instance.BannerIconGroups`，跳过 `IsPattern` 的组，把每组的 `AvailableIcons` 逐个 new 成 `BannerIconVM` 加进 `IconsList`，并按 `_banner.GetIconMeshId()` 设 `IsSelected`**；再遍历 `BannerManager.Instance.ReadOnlyColorPalette` 分流建两个颜色列表；最后 `CurrentIconSize = (int)_banner.GetIconSize().X` 并置 `_initialized = true`。**注意它每次调用都会 `new` 出全新的 `IconsList` 条目和 `CategoryNames`。** |
| `RefreshSelectedColorsAndSigils` | `public void RefreshSelectedColorsAndSigils()` | 按 `_banner` 当前的三个颜色 id 重新勾选 `IconsList` 与两个颜色列表里的 `IsSelected`；**若任一颜色不在列表里，先调 `ExecuteSwitchColors()`；换了还不在就 `Debug.FailedAssert` 后 return。** |
| `OnFinalize` | `public override void OnFinalize()` | 先 `base.OnFinalize()`，再 `CancelInputKey` / `DoneInputKey` 各判空调 `OnFinalize()`，然后**遍历 `CameraControlKeys` 逐个 `OnFinalize()`**。 |
| `ExecuteDone` | `public void ExecuteDone()` | **单行：`this.OnExit(false);`** 它**不做任何还原**——改动已经写在 `Banner` 上，宿主自己负责提交。 |
| `ExecuteCancel` | `public void ExecuteCancel()` | `this._banner.Deserialize(this._initialBanner)` 然后 `this.OnExit(true)`。**先还原后通知。** `_initialBanner` 为 null（用无参 `Banner()` 构造的 `Banner`？）时 `Deserialize` 的行为取决于 `Banner` 实现。 |

### 编辑动作

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ExecuteSwitchColors` | `public void ExecuteSwitchColors()` | 交换两个颜色列表 + 两个当前选中 + 写回 `Banner` 的三个颜色槽 + `_refresh()`。**两个 `_currentSelected*` 为 null 时 `Debug.FailedAssert` 后 return**（不动 `Banner`）。 |
| `ExecuteGoToIndex` | `public void ExecuteGoToIndex(int index)` | **单行：`this._goToIndex(index);`** 无判空。 |
| `SetClanRelatedRules` | `public void SetClanRelatedRules(bool canChangeBackgroundColor)` | **单行：`this.CanChangeBackgroundColor = canChangeBackgroundColor;`** 这是宿主（氏族场景）用来禁止改背景色的开关。 |
| `SetCancelInputKey` / `SetDoneInputKey` | `public void SetCancelInputKey(HotKey hotKey)` / `SetDoneInputKey(HotKey)` | 各一行 `InputKeyItemVM.CreateFromHotKey(hotKey, true)`。 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | `InputKeyItemVM.CreateFromHotKey(hotKey, true)` 后 `CameraControlKeys.Add(item)`。 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | 走 `InputKeyItemVM.CreateFromGameKey(gameKey, true)`。 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | 走 `InputKeyItemVM.CreateFromForcedID(gameAxisKey.AxisKey.ToString(), keyName, true)`。**这是三重重载**——`GameAxisKey` 有 `AxisKey` 属性。 |

### 只读属性与 public 字段

- `Character` → `public BasicCharacterObject Character { get; }`，只读；
- `ShieldRosterElement` → `public ItemRosterElement ShieldRosterElement;`，**public 字段**，构造器里 `new ItemRosterElement(this._shield, 1, null)`；
- `ShieldSlotIndex` → `public int ShieldSlotIndex = 3;`，**public 字段且有初值 3**，宿主用它读角色装备的哪个槽；
- `CurrentShieldIndex` → `public int CurrentShieldIndex;`，**public 字段无初值**。

其余 28 个绑定属性：`CancelInputKey` / `DoneInputKey` / `CameraControlKeys` / `CategoryNames` / `IconsList` / `PrimaryColorList` / `SigilColorList` / 四个 `XxxHint` / `CurrentShieldName` / `MinIconSize` / `MaxIconSize` / `CurrentIconSize` / 四个文案 / `BannerVM` / `IconCodes` / `ColorCodes` / `CanChangeBackgroundColor` / `CharacterGamepadControlsEnabled` / `Title` / `Description` / `TotalStageCount` / `CurrentStageIndex` / `FurthestIndex`。

私有成员：`FindShield()`（`private ItemObject`）、`DoesListHaveColor(MBBindingList<BannerColorVM>, int)`（`private static`）、`IsColorsSwitched()`、`OnIconSelection(BannerIconVM)`、`OnPrimaryColorSelection(BannerColorVM)`、`OnSigilColorSelection(BannerColorVM)`、`OnBannerIconSizeChange(int)` —— **五个私有回调都是构造器/刷新时塞给 `BannerIconVM` / `BannerColorVM` 的委托**，所以外部触发它们只能通过点那些子 VM。

## 真实示例

宿主 [BannerEditorView](../../campaign-ext/BannerEditorView)（`SandBox.GauntletUI/BannerEditor/`）的两种构造方式，正好覆盖「有没有阶段索引」这个分叉：

```csharp
using System;
using TaleWorlds.Core;
using TaleWorlds.Core.ViewModelCollection.BannerEditor;
using TaleWorlds.CampaignSystem;
using TaleWorlds.InputSystem;
using TaleWorlds.Library;

// 我的宿主：照 BannerEditorView 的形状，两个分支只差阶段索引与描述文案
public class MyBannerEditorHost
{
    private readonly Banner _banner;
    private BannerEditorVM _vm;

    public MyBannerEditorHost(BasicCharacterObject character, Banner banner, Action refresh)
    {
        this._banner = banner;

        // 分支一：不在角色创建向导里，三个索引全传 0。
        this._vm = new BannerEditorVM(character, this._banner,
            new Action<bool>(this.OnExit),
            refresh,
            0, 0, 0,
            new Action<int>(this.GoToIndex));
        this._vm.Description = "自定义你的纹章徽记";
    }

    // 尺寸滑条的绑定目标。setter 里 _initialized 为 true 时
    // 会立刻 Banner.SetIconSize + 调 refresh。
    public void SetIconSize(int size)
    {
        if (size < this._vm.MinIconSize || size > this._vm.MaxIconSize)
        {
            return;   // 100 / 700 是构造器里硬编码的边界
        }
        this._vm.CurrentIconSize = size;
    }

    // 氏族场景：禁止改背景色
    public void LockBackgroundColor()
    {
        this._vm.SetClanRelatedRules(false);
        MBDebug.Print("能否改背景色 " + this._vm.CanChangeBackgroundColor);
    }

    public void Commit()
    {
        // ExecuteDone 只调 OnExit(false)，不做还原。
        this._vm.ExecuteDone();
    }

    public void Revert()
    {
        // ExecuteCancel 先 Banner.Deserialize(_initialBanner) 再 OnExit(true)。
        this._vm.ExecuteCancel();
    }

    private void OnExit(bool wasCancelled)
    {
        // 取消时 Banner 已经被还原了；提交时保持改动。
        MBDebug.Print(wasCancelled ? "已取消" : "已提交");
        this._vm = null;
    }

    private void GoToIndex(int index)
    {
        MBDebug.Print("跳到第 " + index + " 阶段");
    }
}
```

`this._banner` 由宿主长期持有并复用——**这正是「取消能回滚」的前提**：VM 只持有快照字符串，真正被改的是宿主那个 `Banner`。

## 风险与边界

- **编辑期间 `Banner` 被就地改写。** 任何在编辑器打开期间读那个 `Banner` 的代码都会看到中间态。**只有 `ExecuteCancel` 会还原。**
- **`ExecuteDone` 不做任何事。** 它只 `OnExit(false)`。**提交的语义完全由 `onExit` 回调的宿主负责**——`BannerEditorView` 那边是退出界面并保留改动。
- **`_initialBanner` 只在构造器取一次。** 在同一个 `Banner` 对象上重新进两次编辑器，第二次的快照是**上一次退出后的状态**，不是原始状态。
- **`goToIndex` 为 null 时 `ExecuteGoToIndex` NRE。** `onExit` / `refresh` 为 null 同理（`OnBannerIconSizeChange` 裸调 `_refresh()`）。
- **`FindShield()` 找不到盾会 `Debug.FailedAssert`。** 它先扫角色四个装备槽，再遍历 `Game.Current.ObjectManager.GetObjectTypeList<ItemObject>()` 找第一面满足 `PrimaryWeapon.IsShield && IsUsingTableau` 的盾。**两处都没有就在非开发模式下静默继续**，此时 `ShieldRosterElement` 为 null，`OnFinalize` 之外的解引用会崩。
- **`MinIconSize = 100` / `MaxIconSize = 700` 是硬编码常量。** 不是从 `Banner` 模型或 `BannerManager` 读的。**滑条越界要自己 clamp。**
- **`RefreshValues()` 每次都重建 `IconsList` 与 `CategoryNames`。** 外部缓存的 `BannerIconVM` 引用在刷新后是孤儿；而且它会**重复 Add**——所以 `RefreshValues()` 不适合反复调用（宿主只在构造器里调一次）。
- **四个 `XxxHint` 的第二参数全是 `null`。** `new HintViewModel(GameTexts.FindText("str_reset_icon", null), null)`——第二个参数是本地化 fallback，不填就只在有语言条目时显示。
- **`IconCodes` / `ColorCodes` 是 public 可写但本类从不写。** 它们是给调试/分享用的编码字符串，本页没有任何代码维护它们。
- **`CharacterGamepadControlsEnabled` 本类也不写。** 宿主（`BannerEditorView`）写。
- **`SetClanRelatedRules` 只改一个 bool，不做任何校验。** 传 true 就能重新打开背景色编辑。
- **`ShieldSlotIndex = 3` 和 `CurrentShieldIndex` 都是 public 字段。** 前者有初值 3、后者没有。**字段不经 `OnPropertyChanged`**，XML 绑定写它们不会通知 UI。
- **`CurrentIconSize` 的 setter 带副作用但有 `_initialized` 守卫。** **在 `RefreshValues()` 期间赋值不会生效**——这既是保护也是陷阱：如果你在派生类的 `RefreshValues()` 里调 `base.RefreshValues()` 之后设尺寸，那时 `_initialized` 已是 true，会真的改纹章。

## 跨版本提示

**public 面在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里完全一致**：17 个 public 签名（构造器 / `RefreshValues` / `RefreshSelectedColorsAndSigils` / `SetClanRelatedRules` / `ExecuteSwitchColors` / `ExecuteDone` / `ExecuteCancel` / `OnFinalize` / `SetCancelInputKey` / `SetDoneInputKey` / 三个 `AddCameraControlInputKey` / `ExecuteGoToIndex`）加 31 个绑定属性与 3 个 public 字段，逐字相同，1088 行一模一样。**跨 1.3 → 1.5 零变化。**

**跨版本风险集中在 [Banner](../../core-extra/Banner) 的形状上：**

- `Serialize()` / `Deserialize(string)` —— 快照与回滚的基石，改了格式就意味着旧快照不可用；
- `GetIconMeshId()` / `SetIconMeshId(int)` / `GetPrimaryColorId()` / `SetPrimaryColorId(int)` / `GetSecondaryColorId()` / `SetSecondaryColorId(int)` / `GetIconColorId()` / `SetIconColorId(int)` / `GetIconSize()`（返回 `Vec2`，取 `.X`）/ `SetIconSize(int)`；
- `BannerManager.Instance.BannerIconGroups` / `ReadOnlyColorPalette`（[BannerManager](../../core-extra/BannerManager)）与 `BannerIconGroup.AvailableIcons` / `IsPattern` / `Name` / `Id`、`BannerColor.PlayerCanChooseForBackground` / `PlayerCanChooseForSigil` / `Color`；
- `BannerViewModel(Banner banner)` 的 `Banner` 属性（[BannerViewModel](../../core-extra/BannerViewModel)）。

**这五棵树里它们全部保持原样，所以本页代码跨 1.3 → 1.5 可编译。** 官方新增纹章图标 / 颜色只是数据层变化，本类的代码不需要动。

## 依赖关系

- UI 底座：[ViewModel](../../core-extra/ViewModel) 提供 31 个属性的通知、两个类型化 `OnPropertyChangedWithValue<InputKeyItemVM>` 重载与 `ExecuteCommand` 派发
- 宿主与持有者：[BannerEditorView](../../campaign-ext/BannerEditorView)（`SandBox.GauntletUI/BannerEditor/`）提供 `character` / `banner` / `onExit` / `refresh` / 阶段索引 / `goToIndex`，并持有那个 `Banner`
- 被编辑的域对象：[Banner](../../core-extra/Banner)（`Serialize` / `Deserialize` / 三个颜色 id / 图标 mesh id / `GetIconSize().X`）
- 图标与颜色数据源：[BannerManager](../../core-extra/BannerManager)（`BannerIconGroups` / `ReadOnlyColorPalette`）、[BannerIconData](../../core-extra/BannerIconData)、[BannerColor](../../core-extra/BannerColor)
- 子控件 VM：[BannerViewModel](../../core-extra/BannerViewModel)（`Banner` 属性）· [BannerIconVM](../../core-extra/BannerIconVM)（`IconID` / `IsSelected` / 接受 `SetOnSelectionAction`）· [BannerColorVM](../../core-extra/BannerColorVM)（`ColorID` / `Color` / `IsSelected` / 接受 `SetOnSelectionAction`）
- 提示：[HintViewModel](../../core-extra/HintViewModel)；文案走 [GameTexts](../../core-extra/GameTexts) 的 `str_reset_icon` / `str_randomize` / `str_undo` / `str_redo`
- 热键：[InputKeyItemVM](../../campaign-ext/InputKeyItemVM)（`CreateFromHotKey` / `CreateFromGameKey` / `CreateFromForcedID`）、[HotKey](../../campaign-ext/HotKey)、[GameKey](../../campaign-ext/GameKey)、[GameAxisKey](../../campaign-ext/GameAxisKey)
- 盾牌查找：[Equipment](../../core-extra/Equipment) / [EquipmentIndex](../../core-extra/EquipmentIndex) / [EquipmentElement](../../core-extra/EquipmentElement) / [ItemRosterElement](../../core-extra/ItemRosterElement) / [ItemObject](../../core-extra/ItemObject)（`PrimaryWeapon.IsShield` / `IsUsingTableau`）
- 桶首页：[viewmodel API 分区](../)
