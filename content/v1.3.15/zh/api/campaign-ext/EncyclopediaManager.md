---
title: "EncyclopediaManager"
description: "游戏内百科背后由反射驱动的页面注册表：用特性按类型注册 EncyclopediaPage 子类，并分发深层链接。"
---
# EncyclopediaManager

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** 无（普通类，并非 `GameModel`）
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## 概述

`EncyclopediaManager` 是决定**"哪个百科页面类负责渲染某个模型类型"**的对象，同时负责分发游戏内百科链接，例如 `Hero-Papurion` 或 `Clan-Sepheron`。它靠反射完成这件事：`CreateEncyclopediaPages()` 遍历当前 `AppDomain` 中所有引用战役程序集的装配体，收集所有可赋值给 [EncyclopediaPage](../EncyclopediaPage/) 的类型，用无参构造函数激活每个实例，并按其 `[EncyclopediaModel]` 或 `[OverrideEncyclopediaModel]` 特性里声明的目标类型把它们登记进 `Dictionary<Type, EncyclopediaPage>`。`[OverrideEncyclopediaModel]` 的页面先登记并且胜出；`[EncyclopediaModel]` 的页面只会填补仍然空着的键。

它同时负责链接一侧：`SetLinkCallback(Action<string, object>)` 装入百科 UI 会调用的委托，`GoToLink(string pageType, string stringID)` 把一个标识符解析到页面、用 `IsValidEncyclopediaItem` 校验条目，然后把 `(pageType, item)` 交回该回调。三个字符串常量——`HOME_ID`、`LIST_PAGE_ID`、`LAST_PAGE_ID`——是保留的伪页面类型。运行时通过 `Campaign.Current.EncyclopediaManager` 取得。

## 心智模型

把它理解成**"一张由反射一次性建好的 `Type -> EncyclopediaPage` 路由表，加上一台链接分发器"**：

- **mod 添加百科页面的典型顺序。** 写一个 [EncyclopediaPage](../EncyclopediaPage/) 的子类，用 `[EncyclopediaModel(PageTargetTypes = new[] { typeof(MyItem) })]` 标注，确保它有**公开无参构造函数**，然后把程序集发出去。你**不需要**自己调 `CreateEncyclopediaPages()`——战役引导会调用它一次。之后在运行期，`GetPageOf(typeof(MyItem))` 就返回你的页面实例。
- **两种特性，优先级不同。** `[OverrideEncyclopediaModel]` 在第一趟被处理，并且可以无条件 `Add`，所以两个 mod 覆盖同一个目标类型会在重复键上抛异常。`[EncyclopediaModel]` 在第二趟处理，并且检查 `!_pages.ContainsKey(type4)`，所以普通 model 绝不会顶掉已登记的页面。只有在你确实要替换游戏自带页面时才用 `Override`。
- **发现范围限定为"引用了战役程序集"的装配体。** 过滤器遍历 `AppDomain.CurrentDomain.GetAssemblies()`，只保留某个 `GetReferencedAssemblies()` 条目等于 `EncyclopediaModelBase` 所在程序集的装配体。页面创建**之后**才动态加载的程序集，或者只通过另一个名字不同的门面间接引用战役程序集的装配体，都不会被看见。
- **它是 UI 状态，不是存档状态。** `_pages`、`_executeLink` 和 `ViewDataTracker` 都是普通字段，没有任何 `[SaveableField]`。这里的一切都不会被持久化；每次战役加载都是从零重建。不要把玩法状态挂在上面。
- **坑：`GetPageOf` 与 `GetIdentifier` 是无保护的字典查找。** 两者都是 `this._pages[type]`，所以未注册的类型会抛 `KeyNotFoundException`。没有"try 版本"——需要容错查找时请遍历 `GetEncyclopediaPages()` 并用 `HasIdentifier` 匹配。
- **坑：`GoToLink(string pageType, string stringID)` 先解引用再判空。** 它在检查 `encyclopediaPage2 != null` **之前**就调用了 `encyclopediaPage2.GetObject(pageType, stringID)`，因此未知页面类型得到的是 `NullReferenceException`，而不是静默跳过。而当 `_executeLink` 为空（屏幕上没有 UI）时它直接返回——百科界面打开之前触发的链接会被静默丢弃。
- **坑：`ViewDataTracker` 是在 `CreateEncyclopediaPages` 内部解析的。** 它等于 `Campaign.Current.GetCampaignBehavior<IViewDataTracker>()`，也就是一次 Behavior 查找。若没有任何 Behavior 实现该接口，属性就是 null，任何用到它的视图数据功能都会失败。

### 何时使用

**使用 `EncyclopediaManager` 的场景：**
- 你希望百科能渲染你自己的类型（一个物品、一种兵种、一个自定义概念）——实现带 `[EncyclopediaModel]` 的 `EncyclopediaPage`。
- 你想替换游戏对某个既有类型的页面——实现带 `[OverrideEncyclopediaModel]` 的 `EncyclopediaPage`。
- 你在写自定义百科界面或"跳转页面"按钮，需要把字符串 id 解析成正确的页面实例。
- 你想枚举全部已注册页面，例如自建索引或搜索界面。

**不要用 `EncyclopediaManager` 的场景：**
- 你想在战役**进行中**添加页面。`CreateEncyclopediaPages()` 是单次引导流程；重跑它会丢掉 UI 当前持有的所有页面实例，包括 `ViewDataTracker`。
- 你想在没有 UI 的情况下按字符串 id 深入跳转。`_executeLink` 为空时 `GoToLink` 是空操作——需要自己解析就先 `SetLinkCallback` 装一个回调。
- 你想知道某个类型**是否**有页面。`GetPageOf` 未命中就抛异常；请改用 `GetEncyclopediaPages()` 配合 `HasIdentifier` 匹配，或对 `GetPageOf` 做存在性保护。
- 你想存任何跨存档的东西。这个类里没有任何东西会被序列化；请用你自己的 [CampaignBehaviorBase](../CampaignBehaviorBase/) 的 `SyncData`。
- 你想要战役状态。它只是百科 UI 的路由表，仅此而已。

## 依赖关系

- [EncyclopediaPage](../EncyclopediaPage/) — 每个已注册页面都必须派生的抽象基类，提供 `GetIdentifier`、`HasIdentifier`、`GetObject`、`IsValidEncyclopediaItem`。
- [EncyclopediaModelBase](../EncyclopediaModelBase/) — 它的程序集是 `CreateEncyclopediaPages` 里的引用过滤器，因此定义了"可见程序集"的含义。
- [OverrideEncyclopediaModel](../OverrideEncyclopediaModel/) — 第一趟处理的特性，其页面胜出且可能冲突。
- [IViewDataTracker](../IViewDataTracker/) — 创建页面时解析进 `ViewDataTracker` 的战役 Behavior 接口。
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — `GetCampaignBehavior<IViewDataTracker>()` 所查找的 Behavior 基类。
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.EncyclopediaManager` 是唯一公开句柄，`GetCampaignBehavior<T>()` 也挂在它上面。
- [MBObjectManager](../MBObjectManager/) — `GetObject(pageType, stringID)` 据以解析标识符的对象系统层。
- [Hero](../../campaign/Hero/) 与 [Clan](../../campaign/Clan/) — 内置页面的标准目标，也是自定义深层链接最常用的目标。
- [CharacterObject](../../campaign/CharacterObject/) — 另一个内置页面目标，可作为兵种页面实现的参考。

## 主要成员

#### `public void CreateEncyclopediaPages()`

构建整张 `Type -> EncyclopediaPage` 字典并解析 `ViewDataTracker`。这是你永远不会调用的构造过程，也是你永远不会挂的引导钩子。
- **算法：** `_pages = new Dictionary<Type, EncyclopediaPage>()`；`ViewDataTracker = Campaign.Current.GetCampaignBehavior<IViewDataTracker>()`；收集 `EncyclopediaModelBase` 所在程序集，以及 `AppDomain` 中引用它的每个程序集；对每个程序集调 `GetTypesSafe(null)` 汇入同一个类型列表；**第一趟**——对每个可赋值给 `EncyclopediaPage` 的类型，读其 `[OverrideEncyclopediaModel]` 特性，每个特性 `Activator.CreateInstance(type)` 一次，并对 `PageTargetTypes` 里每个类型 `_pages.Add`；**第二趟**——对 `[EncyclopediaModel]` 做同样的事，但只在 `!_pages.ContainsKey(...)` 时 `Add`。
- **返回值：** 无。**副作用：** 整体替换 `_pages`，并覆盖 `ViewDataTracker`。
- **坑：** 第一趟调用 `_pages.Add` 时没有任何重复键保护，因此两个程序集覆盖同一目标类型会在战役加载期间抛 `ArgumentException`——是硬失败，不是警告。
- **坑：** `Activator.CreateInstance` 要求每个页面类都有公开无参构造函数。带构造参数的页面会在此处抛 `MissingMethodException`，而百科界面此时甚至还没显示过。
- **坑：** `GetTypesSafe` 按类型吞掉加载错误，但某个装配体的类型加载失败时会静默地不贡献任何页面——页面缺失却没有异常。
- **坑：** 在战役中途第二次调用它会丢掉全部页面实例并对它们重新跑一遍 `Activator`，于是 UI 缓存的任何视图数据状态都会丢失。

#### `public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()`

即 `Enumerable.Distinct(this._pages.Values)`——当前已注册的全部去重页面实例。
- **返回值语义：** 一个惰性、去重后的字典值投影。`CreateEncyclopediaPages()` 跑之前为空，每次枚举都是一次全新的枚举。
- **坑：** 它返回的是页面**实例**而非类型。由于多个类型可能映射到同一个页面实例，请用它来枚举页面，而不是用来回答"覆盖了哪些类型"。

#### `public EncyclopediaPage GetPageOf(Type type)`

无保护字典查找：`this._pages[type]`。
- **返回值语义：** 为 `type` 登记的页面实例；若 `type` 不是已登记的目标类型则抛 `KeyNotFoundException`。不存在返回 null 的路径。
- **用途：** 在你确定某个类型已被覆盖时的快速路径。
- **坑：** `Dictionary<Type, ...>` 按精确运行时类型查找。即使某个派生类已注册，传接口或基类也会失败——请传具体的 `MBObjectBase` 子类。

#### `public string GetIdentifier(Type type)`

即 `this._pages[type].GetIdentifier(type)`——字典查找加上页面自己的标识规则。
- **返回值语义：** 页面为 `type` 使用的标识字符串；类型未注册时是 `KeyNotFoundException`；否则可能是页面自己的 `GetIdentifier` 抛出的异常。
- **用途：** 用来算出你要传给 `GoToLink` 当作 `stringID` 的字符串。页面通常返回 `type.Name`，所以这个 id 是模型的类型名，而不是存档 id。

#### `public void GoToLink(string pageType, string stringID)`

解析一个 `(pageType, stringID)` 对，校验通过后触发已装入的链接回调。
- **算法：** 若 `_executeLink == null` 或 `pageType` 为 null/空则返回；若 `pageType` 是 `HOME_ID` 或 `LAST_PAGE_ID` 则触发 `(pageType, null)`；若 `pageType == LIST_PAGE_ID`，找到第一个满足 `HasIdentifier(stringID)` 的页面并触发 `(pageType, 该页面)`；否则找到第一个满足 `HasIdentifier(pageType)` 的页面，在它上面调用 `GetObject(pageType, stringID)`，并且仅当 `IsValidEncyclopediaItem(item)` 为真时触发 `(pageType, item)`。
- **返回值：** 无。除非装入了回调，否则整个方法都是空操作。
- **坑：** `GetObject` 在对页面判空**之前**就被调用，所以未知 `pageType` 抛 `NullReferenceException`。这条路径上没有用 `Debug.FailedAssert`。
- **坑：** `pageType` 必须是**页面的标识符**，不是类型名。覆写了 `GetIdentifier` 的页面会改变它，因此硬编码的 `"Hero"` 字符串只对默认页面正确。
- **坑：** 搜索是对 `GetEncyclopediaPages()` 做 `FirstOrDefault`，因此当多个页面共享同一标识符时，胜者取决于字典枚举顺序——不要依赖它。

#### `public void GoToLink(string link)`

供 `TextObject` 超链接使用的单字符串重载：在**第一个** `-` 处切分，然后转交给双参数重载。
- **返回值：** 无。若 `link` 在下标 > 0 处不含 `-`，它会命中 `Debug.FailedAssert` 并且不做别的事——开发版是断言，发布版是空操作。
- **坑：** 它只在第一个 `-` 处切分。含 `-` 的 `stringID` 会原样透传（这是对的），但分隔符在下标 0 的链接会被当作格式错误拒绝。
- **坑：** 在发布版里格式错误的链接会被静默忽略，所以接错链接的 UI 表现为"死按钮"而不是报错。

#### `public void SetLinkCallback(Action<string, object> ExecuteLink)`

装入（或替换）百科 UI 会调用的委托。传 `null` 会清除它，之后所有 `GoToLink` 都变成空操作。
- **副作用：** 只持有一个回调。两个互相竞争的百科界面会争抢它；最后一次 `SetLinkCallback` 获胜。
- **用途：** 在你的界面激活路径上调用它；如果你的界面可能在另一个界面构建期间被拆除，请在关闭时清除它。

#### `public IViewDataTracker ViewDataTracker { get; private set; }`

`CreateEncyclopediaPages` 期间解析出的战役 Behavior。当没有 Behavior 实现 `IViewDataTracker` 时为 null。
- **坑：** 该属性是私有 setter，你无法注入替代实现。在任何依赖视图数据的自定义页面里使用前请先判空。

#### `public const string HOME_ID / LIST_PAGE_ID / LAST_PAGE_ID`

三个保留的伪页面类型，取值分别为 `"Home"`、`"ListPage"`、`"LastPage"`。它们是 `const`，所以请用常量而不是字符串字面量，这样未来的改名仍保持源码兼容。

## 使用示例

### 示例 1 — 用特性发现机制添加自定义百科页面

```csharp
using TaleWorlds.CampaignSystem.Encyclopedia;

namespace MyMod
{
    [EncyclopediaModel(PageTargetTypes = new[] { typeof(MyItem) })]
    public class MyItemPage : EncyclopediaPage
    {
        // CreateEncyclopediaPages() 会调 Activator.CreateInstance，
        // 因此公开无参构造函数是强制要求。
        public MyItemPage() { }

        public override bool IsValidEncyclopediaItem(MBObjectBase item)
        {
            return item is MyItem;
        }

        public override MBObjectBase GetObject(string pageType, string stringID)
        {
            return MBObjectManager.Instance.GetObject<MyItem>(stringID);
        }

        public override string GetIdentifier(Type type)
        {
            return "MyItem";
        }

        public override bool HasIdentifier(string pageType)
        {
            return pageType == "MyItem";
        }
    }
}
```

### 示例 2 — 安全地查找页面

```csharp
public EncyclopediaPage FindPage(Type modelType)
{
    var manager = Campaign.Current.EncyclopediaManager;
    // GetPageOf 未命中会抛 KeyNotFoundException，不确定时改为扫描。
    foreach (var page in manager.GetEncyclopediaPages())
    {
        if (page.HasIdentifier(modelType.Name))
        {
            return page;
        }
    }
    return null;
}
```

### 示例 3 — 从自定义菜单驱动跳转

```csharp
public class EncyclopediaLinkButton
{
    public EncyclopediaLinkButton()
    {
        // 必须在任何 GoToLink 之前装好回调，否则链接会被丢弃。
        Campaign.Current.EncyclopediaManager.SetLinkCallback((pageType, item) =>
        {
            Debug.Print($"Encyclopedia requested page={pageType} item={item}");
        });
    }

    public bool OpenHeroPage(Hero hero)
    {
        if (hero == null)
        {
            return false;
        }
        var manager = Campaign.Current.EncyclopediaManager;
        string pageType = manager.GetIdentifier(typeof(Hero));
        manager.GoToLink(pageType, hero.StringId);
        return true;
    }
}
```

### 示例 4 — 直接从 TextObject 超链接深入跳转

```csharp
public void OnHyperlinkClicked(TextObject text)
{
    var link = text.GetEntireText(); // 例如 "Hero-Papurion"
    // 在第一个 '-' 处切分，然后解析 page + id；格式错误会触发断言。
    Campaign.Current.EncyclopediaManager.GoToLink(link);
}
```

## 风险与崩溃边界

- **崩溃边界 1 —— 重复的 override 目标类型。** `[OverrideEncyclopediaModel]` 那一趟使用 `Dictionary.Add` 且无保护。两个程序集都声明了 `typeof(Hero)` 的页面就会在战役加载期间的 `CreateEncyclopediaPages()` 里抛 `ArgumentException`。游戏根本起不来，那条路径上没有任何 catch。请与其他 mod 协调，或者改用 `[EncyclopediaModel]`。
- **崩溃边界 2 —— 页面类没有公开无参构造函数。** `Activator.CreateInstance(type)` 会在引导期抛 `MissingMethodException`。即便你的真正构造发生在之后，也要保留一个公开无参构造函数。
- **崩溃边界 3 —— 对所有已加载装配体的反射。** `CreateEncyclopediaPages` 枚举 `AppDomain.CurrentDomain.GetAssemblies()`，并对每个引用型装配体调 `GetTypesSafe`。某个类型依赖无法解析的 mod 装配体会被跳过而不是被报告，于是页面可能静默缺失——而且如果它还带着 `[OverrideEncyclopediaModel]`，浮现出来的是**重复键**路径，那更难排查。
- **"已加载"并不等于"会被发现"。** 只有直接引用 `EncyclopediaModelBase` 所在程序集的装配体才会被扫描。页面程序集若只通过另一个 mod 的程序集间接获得战役引用，将不会被发现。请让你的页面程序集直接引用 `TaleWorlds.CampaignSystem`。
- **不参与存档序列化。** `_pages`、`_executeLink` 与 `ViewDataTracker` 都没有 `[SaveableField]`。你放在这里的东西活不过一次存读档，也不会被恢复——把玩法状态放进 Behavior 的 `SyncData([IDataStore](../IDataStore/))`。
- **跨域依赖。** 该类位于 `TaleWorlds.CampaignSystem.Encyclopedia`，却依赖 `System.Reflection`、经由 `Campaign.Current` 解析，并依赖 `TaleWorlds.ObjectSystem`（`MBObjectManager`）。因此任何提供页面的 mod 程序集都需要同时引用这三者。
- **加载顺序依赖。** 页面只在 `CreateEncyclopediaPages()` 跑完之后才存在。战役引导期间某个 Behavior 的 `RegisterEvents` 可能在页面创建**之前**执行，所以在那里调 `GetPageOf` 连原版类型都会抛异常。请在首次 UI 使用时延迟解析。
- **ID 稳定性。** `GetIdentifier` 默认返回模型的**类型名**，所以改名会打断文本里的超链接。此时 `GoToLink(string link)` 会命中 `Debug.FailedAssert`，并在发布版里静默什么都不做——表现为死按钮而不是异常。请使用 `HOME_ID` / `LIST_PAGE_ID` / `LAST_PAGE_ID` 常量，并优先用 `GetIdentifier` 而非字面量页面类型字符串。
- **UI 耦合。** `GoToLink` 会写给通过 `SetLinkCallback` 装入回调的那个界面。同一时刻只存在一个回调；两个百科界面同时存活会静默地互相抢走导航。

## 跨版本提示

- **v1.3.x（本页）：** 上述成员集合就是 1.3.15 的完整公开表面。`ViewDataTracker` 是带私有 setter 的 `IViewDataTracker`，三个 id 常量取值如上。
- **v1.4.x：** 两趟特性优先级（先 `Override`、后 `Model` 带 `ContainsKey` 保护）未变。新版本增加了更多内置百科页面与本地化键，但页面注册依然是特性驱动的反射流程——并没有新增显式注册 API。
- **v1.5.x：** 预计会有更多 `EncyclopediaPage` 覆写和更广的内置页面集合。危险的契约不会改变：`[OverrideEncyclopediaModel]` 仍然是冲突而非后注册者胜出，无法解析的链接在发布版里仍然是静默空操作。如果你的 mod 覆写了原版页面，每次升级都要重新确认。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[EncyclopediaPage](../EncyclopediaPage/) — 想注册页面就必须派生的基类
- ↔ 同级：[OverrideEncyclopediaModel](../OverrideEncyclopediaModel/) — 优先级更高、也更容易冲突的特性
- ↔ 同级：[EncyclopediaModelBase](../EncyclopediaModelBase/) — 它的程序集就是发现过滤器
- ↔ 同级：[IViewDataTracker](../IViewDataTracker/) — 被解析进 `ViewDataTracker` 的 Behavior 接口
- ↔ 同级：[MBObjectManager](../MBObjectManager/) — 把字符串 id 解析成活对象
- ↑ 战役世界：[Campaign](../../campaign/Campaign/) — `Campaign.Current.EncyclopediaManager`
- ↑ Behavior 基类：[CampaignBehaviorBase](../CampaignBehaviorBase/)
- ↑ 英雄：[Hero](../../campaign/Hero/)
- ↑ 氏族：[Clan](../../campaign/Clan/)