---
title: "BannerBuilderCategoryVM"
description: "战旗编辑器里一个图标分类（如「狼头」「龙纹」）的视图模型。它把一个 BannerIconGroup 按 IsPattern 拆成背景或图标两套条目，构造时一次性填满 ItemsList，并把「玩家点了哪一条」原样上抛给 BannerBuilderVM。"
---
# BannerBuilderCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class BannerBuilderCategoryVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderCategoryVM.cs`

## 概述

战旗编辑器（Banner Builder）左侧是一列分类，每个分类点开后是一列可选条目。**一个分类就是本类**。它的工作是把战役侧的一个 `BannerIconGroup`（XML 加载出来的图标组）翻译成一列可点击的 `BannerBuilderItemVM`。

关键在于**分类有两种形态，由 `IsPattern` 决定走哪条路**：

```csharp
private void PopulateItems()
{
    ItemsList.Clear();
    if (IsPattern)
    {
        for (int i = 0; i < _category.AllBackgrounds.Count; i++)
        {
            KeyValuePair<int, string> keyValuePair = _category.AllBackgrounds.ElementAt(i);
            ItemsList.Add(new BannerBuilderItemVM(keyValuePair.Key, keyValuePair.Value, _onItemSelection));
        }
    }
    else
    {
        for (int j = 0; j < _category.AllIcons.Count; j++)
        {
            KeyValuePair<int, BannerIconData> keyValuePair2 = _category.AllIcons.ElementAt(j);
            ItemsList.Add(new BannerBuilderItemVM(keyValuePair2.Key, keyValuePair2.Value, _onItemSelection));
        }
    }
}
```

- **`IsPattern == true`**（`pattern` 类型的组）：条目是**背景**，取自 `BannerIconGroup.AllBackgrounds`（`MBReadOnlyDictionary<int, string>`，值是纹理 id 字符串），用 `BannerBuilderItemVM(int key, string backgroundTextureID, Action<...>)` 那个重载。
- **`IsPattern == false`**（普通图标组）：条目是**图标**，取自 `AllIcons`（`MBReadOnlyDictionary<int, BannerIconData>`），用 `BannerBuilderItemVM(int key, BannerIconData iconData, Action<...>)` 那个重载。

🔴 **两个来源不互斥。** `BannerIconGroup` 同时有 `AllIcons`、`AllBackgrounds`、`AvailableIcons` 三个字典（`BannerIconGroup.cs:12/14/16`），本类只按 `IsPattern` 在 `AllBackgrounds` 与 `AllIcons` 之间二选一，`AvailableIcons` 完全不用。

## 谁在用它

构造方只有一个：**`BannerBuilderVM`**（`BannerBuilderVM.cs:651`）：

```csharp
Categories.Add(new BannerBuilderCategoryVM(category, OnItemSelection));
```

`Categories` 是 `BannerBuilderVM` 里的 `MBBindingList<BannerBuilderCategoryVM>`（`BannerBuilderVM.cs:609` 分配，`BannerBuilderVM.cs:128` 作为 `[DataSourceProperty]` 暴露）。同一份列表在 `BannerBuilderVM.cs:690` 被 `ApplyActionOnAllItems` 批量刷新，`BannerBuilderVM.cs:733` 与 `BannerBuilderVM.cs:843` 按下标取用。

注意 `OnItemSelection` 这个回调被**原样传给每一个子条目**——本类自己不处理选择，它只做转发。

## 心智模型

把它读成**「一次性的分类展开器：构造时把字典摊平成列表，之后只等上层来刷新」**：

- **谁 new 它**：`BannerBuilderVM`（`BannerBuilderVM.cs:651`），遍历图标组并逐个构造。
- **谁持引用**：`BannerBuilderVM.Categories` 这个 `MBBindingList`，最终由战旗编辑器屏幕持有与渲染。**释放责任在 `BannerBuilderVM`，不在本类。**
- **绑到哪个 View 属性**：四个 `[DataSourceProperty]`。`Title` 是分类显示名（来自 `_category.Name.ToString()`），`ItemsList` 是条目列表，`IsPattern` 供 prefab 区分两套布局（背景网格 vs 图标网格），`IsEnabled` 在构造函数里硬设为 `true` 且**此后原版没有任何代码修改它**。
- **什么时候 Dispose**：**不需要 Dispose。** 本类不覆写 `OnFinalize`，不注册任何事件或 `Game.Current.EventManager` 监听。它持有两个引用：一个 `BannerIconGroup`（战役侧只读数据）与一个 `Action<BannerBuilderItemVM>` 委托。**唯一会"泄漏"的是那个委托**——它捕获 `BannerBuilderVM`（`this.OnItemSelection`），若你把本类实例缓存到比编辑器屏幕更长寿的地方，就把 `BannerBuilderVM` 一起留住了。
- 🔴 **`ItemsList` 只在构造时填一次。** `PopulateItems()` 是私有方法，只在构造函数末尾被调一次（`BannerBuilderCategoryVM.cs:98`）。**XML 重载（`BannerIconGroup.Deserialize`）或 `Merge` 之后，条目不会自动重建**——必须由外部重新构造本类。
- 🔴 **用 `ElementAt(i)` 遍历字典。** 这是 `IEnumerable` 上的扩展方法，每轮都是一次线性扫描。对 `AllIcons`/`AllBackgrounds` 这种几十到几百条的字典，整体是 O(n²)。功能正确但不是高性能写法——**继承时若条目很多，直接遍历字典值更快。**
- **`IsEnabled` 是摆设。** 构造函数第 97 行硬设 `true`，原版无任何代码改动它。留给你控制。
- **`_category` 是 `readonly` 但 `BannerIconGroup` 本身可变**（有 `Deserialize` 与 `Merge`）。所以 `Title` 会在外部改过 `Name` 后变得陈旧，而 `ItemsList` 不会变——**两者可能不一致**。
- **常见误用**：拿 `IsPattern` 当作"这个分类是背景贴图"的判断并据此做业务逻辑。它只决定**条目来源字典**，不描述战旗最终是纯色底还是叠加纹章。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BannerBuilderCategoryVM(BannerIconGroup category, Action<BannerBuilderItemVM> onItemSelection)`（`:91-100`） | 由 `BannerBuilderVM.cs:651` 调用。建空 `ItemsList`、存 `_category` 与回调、从 `_category.IsPattern` 赋 `IsPattern`、`IsEnabled = true`（`:97`），然后 `PopulateItems()` + `RefreshValues()`。**只填一次，之后不再重建。** |
| `PopulateItems` | `private void PopulateItems()`（`:108-127`） | 唯一的填充逻辑。按 `IsPattern` 二选一：`true` 遍历 `_category.AllBackgrounds` 用 `string` 重载建条目；`false` 遍历 `_category.AllIcons` 用 `BannerIconData` 重载。**用 `ElementAt(i)` 遍历字典，整体 O(n²)。** |
| `RefreshValues` | `public override void RefreshValues()`（`:102-106`） | 唯一覆写。只有一行实质内容：`Title = _category.Name.ToString();`。**不会重建 `ItemsList`。** |
| `Title` | `[DataSourceProperty] public string Title`（`:23-38`） | 分类显示名。由 `_category.Name.ToString()` 转成**字符串快照**；外部改 `Name` 后需重新 `RefreshValues()`。 |
| `ItemsList` | `[DataSourceProperty] public MBBindingList<BannerBuilderItemVM> ItemsList`（`:74-89`） | 展开后的条目列表。构造时填一次；`PopulateItems` 会先 `Clear()` 再重填，但**只有构造函数会调它**。 |
| `IsPattern` | `[DataSourceProperty] public bool IsPattern`（`:40-55`） | 直接来自 `_category.IsPattern`。**只决定条目来源字典**（`AllBackgrounds` 还是 `AllIcons`），不描述战旗最终外观。 |
| `IsEnabled` | `[DataSourceProperty] public bool IsEnabled`（`:57-72`） | 构造函数第 97 行硬设为 `true`，**原版此后无任何代码修改**。留给你控制。 |
| `_onItemSelection` | `private readonly Action<BannerBuilderItemVM>`（`:13`） | 构造时传入并**原样转交每一个子条目**。本类自己不处理选择。**它捕获的宿主生命周期不受本类管理——这是唯一的泄漏可能。** |

## 真实示例

构造一个分类——这是 `BannerBuilderVM.cs:651` 的原样写法：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder;
using TaleWorlds.Library;

public MBBindingList<BannerBuilderCategoryVM> BuildCategories(
    IEnumerable<BannerIconGroup> groups,
    Action<BannerBuilderItemVM> onItemSelection)
{
    MBBindingList<BannerBuilderCategoryVM> categories =
        new MBBindingList<BannerBuilderCategoryVM>();

    foreach (BannerIconGroup group in groups)
    {
        // 与 BannerBuilderVM.cs:651 同形：回调原样转交，本类不参与选择逻辑。
        categories.Add(new BannerBuilderCategoryVM(group, onItemSelection));
    }

    return categories;
}
```

绕过 `ElementAt` 的 O(n²)，直接遍历字典值——这是更快的等价写法：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder;
using TaleWorlds.Library;

public static void PopulateItemsFast(BannerBuilderCategoryVM category, BannerIconGroup group)
{
    category.ItemsList.Clear();

    if (group.IsPattern)
    {
        // 原版用 AllBackgrounds.ElementAt(i)，每次都是一次 O(n) 扫描。
        foreach (KeyValuePair<int, string> pair in group.AllBackgrounds)
        {
            category.ItemsList.Add(new BannerBuilderItemVM(pair.Key, pair.Value, null));
        }
    }
    else
    {
        foreach (KeyValuePair<int, BannerIconData> pair in group.AllIcons)
        {
            category.ItemsList.Add(new BannerBuilderItemVM(pair.Key, pair.Value, null));
        }
    }
}
```

图标组被 `Merge` 之后强制重建条目——因为本类构造完就再也不重建了：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder;
using TaleWorlds.Library;

public class MyBannerBuilderCategoryVM : BannerBuilderCategoryVM
{
    private readonly BannerIconGroup _group;
    private readonly Action<BannerBuilderItemVM> _onSelect;

    public MyBannerBuilderCategoryVM(BannerIconGroup category, Action<BannerBuilderItemVM> onItemSelection)
        : base(category, onItemSelection)
    {
        _group = category;
        _onSelect = onItemSelection;
    }

    public void Rebuild()
    {
        // 原版没有这个入口：PopulateItems() 是私有的，且只在构造时调用一次。
        // BannerIconGroup.Deserialize / Merge 之后必须自己重建，否则显示的是旧条目。
        ItemsList.Clear();

        if (_group.IsPattern)
        {
            foreach (KeyValuePair<int, string> pair in _group.AllBackgrounds)
            {
                ItemsList.Add(new BannerBuilderItemVM(pair.Key, pair.Value, _onSelect));
            }
        }
        else
        {
            foreach (KeyValuePair<int, BannerIconData> pair in _group.AllIcons)
            {
                ItemsList.Add(new BannerBuilderItemVM(pair.Key, pair.Value, _onSelect));
            }
        }

        RefreshValues();
    }
}
```

## 风险与边界

- 🔴 **`ItemsList` 构造后即冻结。** `PopulateItems()` 是私有的，只在构造函数末尾调用一次（`BannerBuilderCategoryVM.cs:98`）。`BannerIconGroup.Deserialize(XmlNode, MBList<BannerIconGroup>)` 与 `Merge(BannerIconGroup)` 之后**条目不会自动更新**，而 `Title` 与 `ItemsList` 可能因此互相矛盾。要更新只能重建实例。
- 🔴 **委托捕获是唯一泄漏点。** `_onItemSelection` 在原版是 `BannerBuilderVM.OnItemSelection`（捕获 `this`）。本类不注册事件、不覆写 `OnFinalize`，所以**它自身不会泄漏**；但把本类实例缓存到比编辑器屏幕更长寿的地方，就会连带留住 `BannerBuilderVM`。
- **O(n²) 构造。** `ElementAt(i)` 在 `MBReadOnlyDictionary` 上每次调用都是一次从头线性扫描。条目多的大分类会有可测量的开销——功能正确，别照抄这个写法。
- **`IsEnabled` 永不改变。** 构造函数硬设 `true`，原版无任何写入。**可用性判定必须由你实现。**
- **`Title` 是快照，`ItemsList` 是引用。** 外部改 `_category.Name` 后 `Title` 陈旧；改 `_category.AllIcons` 后 `ItemsList` 陈旧。两者刷新时机不同步。
- **`BannerIconGroup` 可变而 `_category` 只读。** 只读的是引用，不是对象。`Deserialize` / `Merge` 都能就地改它。
- **`AvailableIcons` 完全未用。** `BannerIconGroup` 有三个字典（`BannerIconGroup.cs:12/14/16`），本类只用 `AllBackgrounds` 与 `AllIcons`；`AvailableIcons` 是另一套（可能带可用性过滤）筛选逻辑，选它得自己写。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。战旗本身的持久化在 `BannerIconGroup` 与战旗数据侧。
- **本类不做选择处理。** 点条目后的高亮、跨分类互斥、撤销/重做全在 `BannerBuilderVM`。`BannerBuilderItemVM.ExecuteSelection()` 是子条目的入口。
- **native 边界**：无。纯托管。图标纹理 id 最终会走到渲染层，但那是 `BannerBuilderItemVM` 的下游。
- **跨版本**：`BannerIconGroup` 的三个字典字段与 `Name` / `IsPattern` / `Id` 属性、`BannerBuilderItemVM` 的两个构造函数重载、以及 `BannerBuilderVM.cs:651` 的调用形状都是 v1.4.5 的形状。

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 属性变更通知与 `RefreshValues` 契约来自这里
- ↔ 同级：[BannerBuilderVM](../BannerBuilderVM) —— **唯一的构造方与持有方**，`Categories` 列表在 `:609` 分配、`:651` 填充、`:690` 批量刷新
- ↔ 同级：[BannerBuilderItemVM](../BannerBuilderItemVM) —— 本类产出的条目，两个构造重载分别对应背景与图标
- → 图标组：[BannerIconGroup](../../core-extra/BannerIconGroup) —— 构造参数；本类只读它的 `Name`、`IsPattern`、`AllIcons`、`AllBackgrounds`
- → 条目数据：`BannerIconData`（`TaleWorlds.Core`），条目构造时的第二种实参类型
- → 列表容器：[MBBindingList](../../core-extra/MBBindingList)
- → 文本：[GameTextManager](../../core-extra/GameTextManager)
