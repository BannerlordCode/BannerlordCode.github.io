---
title: "BrushFactory"
description: "Brush 的唯一生产者：构造时挂上 ResourceDepot.OnResourceChange、Initialize() 按「Base 文件优先」的顺序把 Brushes/*.xml 全部解析进字典；OverrideBrush 采用「先挂起、后套用」的两阶段机制，且挂起队列在每次文件加载后无条件清空；SaveBrushAs 会直接回写源 XML 文件。"
---

# BrushFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushFactory`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`（全文 1105 行）

## 概述

`BrushFactory` 干三件事：**把 XML 变成 [Brush](../Brush)、提供按名取用、写回 XML**。它不渲染、不持有控件、不参与每帧逻辑——它是纯资源层，而且在 1.3.0 的整棵源码树里**只有一个实例**：

```csharp
// TaleWorlds.Engine.GauntletUI/UIResourceManager.cs:190-191
UIResourceManager.BrushFactory = new BrushFactory(UIResourceManager.ResourceDepot, "Brushes", UIResourceManager.SpriteData, UIResourceManager.FontFactory);
UIResourceManager.BrushFactory.Initialize();
```

它的实例经 [UIContext](../UIContext) 传进每个 `GauntletLayer`（`GauntletLayer.cs:30` 构造 `new UIContext(..., UIResourceManager.BrushFactory)`），模组侧能拿到的入口是 `UIContext.GetBrush(string)`（`UIContext.cs:182`，直接转发 `BrushFactory.GetBrush`）。

公开成员只有八项：

| 成员 | 位置 | 说明 |
| --- | --- | --- |
| `Brushes` | `:18` | `IEnumerable<Brush>`，字典值集合。 |
| `DefaultBrush` | `:28` | 找名为 `"DefaultBrush"` 的条目，**没有就返回 null**。 |
| 构造函数 | `:41` | 四个参数：资源库、资源文件夹名、SpriteData、FontFactory。**构造函数里就有副作用**——`this._resourceDepot.OnResourceChange += this.OnResourceChange;`。 |
| `Initialize` | `:61` | `this.LoadBrushes();` 一行。 |
| `LoadBrushFile` | `:889` | 加载单个 XML 文件，整段包在 try/catch 里，异常转成 `Debug.FailedAssert`。 |
| `GetBrush` | `:962` | `TryGetValue` → 返回条目或 null。 |
| `SaveBrushAs` | `:973` | 把内存中的 Brush 写回它**原本所在的 XML 文件**。 |
| `CheckForUpdates` | `:1013` | 比对文件修改时间，有变化就整体重载并触发 `BrushChange`。 |
| `BrushChange` | `:1054` | `public event Action BrushChange;` |

## 心智模型

**把它当成「一次全量解析 + 一个按名字典」，而不是一个可以增量查询的服务。** 核心在两个私有方法里。

**第一，`LoadBrushes()`（`:872`）的顺序决定一切。**

```csharp
this._brushes.Clear();
this._brushCategories.Clear();
this._lastWriteTimes.Clear();
List<string> brushesNames = this.GetBrushesNames();     // _resourceDepot.GetFiles(folder, ".xml", false)
this.LoadBrushFile("Base");
foreach (string text in brushesNames)
{
    if (text != "Base") { this.LoadBrushFile(text); }
}
```

**`Base` 永远第一个加载**（哪怕资源库里根本没有 `Base.xml`，那次 `LoadBrushFile` 也只是被 catch 掉）。这意味着所有 `BaseBrush="X"` 继承只要 X 在 `Base.xml` 里就一定能命中。`GetBrushesNames()` 返回的顺序是 `ResourceDepot.GetFiles` 的顺序，**mod 无法控制**——所以 mod 之间互相 `BaseBrush` 依赖时，加载顺序是不确定的。

**第二，`OverrideBrush` 是两阶段机制，这是全类最容易踩的地方。**

`LoadBrushFrom`（`:452`）里：

```csharp
if (dictionary.ContainsKey("OverrideBrush"))
{
    if (flag) { Debug.FailedAssert("A brush shouldn't have both a BaseBrush and a OverrideBrush", ...); }
    string text = dictionary["OverrideBrush"];
    if (!string.IsNullOrEmpty(text))
    {
        BrushOverrideInfo value2 = new BrushOverrideInfo(text, brush, dictionary, brushNode);
        if (this._overriddenBrushes.ContainsKey(text)) { this._overriddenBrushes[text] = value2; }
        else { this._overriddenBrushes.Add(text, value2); }
    }
    else { Debug.FailedAssert("Invalid overridden brush name: " + text, ...); }
}
```

注意此时**什么都没生效**——只是把覆盖请求按目标名存进 `_overriddenBrushes`。真正套用发生在 `LoadBrushFromFileAux`（`:902`）的**末尾**，每次文件加载完就跑一遍：

```csharp
foreach (KeyValuePair<string, BrushOverrideInfo> pair in this._overriddenBrushes)
{
    if (this._brushes.TryGetValue(pair.Key, out originalBrush))
    {
        value.OverrideBrush.FillForOverride(originalBrush);
        this.ApplyBrushAttributesFrom(value.OverrideBrush, value.OverrideBrushNode, value.OverrideBrushAttributes);
        this._brushes[pair.Key] = value.OverrideBrush;
    }
    else { Debug.FailedAssert("Failed to find brush for override: " + key, ...); }
}
this._overriddenBrushes.Clear();
```

三个推论：

1. **覆盖目标必须先于（或同于）覆盖者被加载。** 若 `MyOverride.xml` 排在 `Target.xml` 之前，加载 `MyOverride.xml` 时目标还没进字典 → 走 `FailedAssert` 分支。
2. **挂起队列在每次文件加载后无条件清空。** 所以 `LoadBrushes()` 里第一个文件（`Base`）加载完的瞬间，队列就被清干净了。若 `Base.xml` 里带了一个指向别的文件的 `OverrideBrush`，那次覆盖请求会被丢弃且只留一条断言。
3. **同名覆盖后者胜。** `if (this._overriddenBrushes.ContainsKey(text)) this._overriddenBrushes[text] = value2;`——后注册的覆盖请求替换先注册的，最终生效的是最后一个。

覆盖套用的语义是 `FillForOverride` → `OverriddenBrush = target; FillFrom(target)`，然后**把该 XML 节点自己的属性/图层/样式/动画再叠加上去**（`ApplyBrushAttributesFrom`）。所以覆盖是「以目标为基础 + 差异补丁」。

**第三，`ApplyBrushAttributesFrom`（`:503`）只认 9 个 brush 级属性。** 逐条是 `Name`、`Font`（经 `_fontFactory.GetFont`）、`FontSize`、`TransitionDuration`、`TextHorizontalAlignment` / `TextVerticalAlignment`（`Enum.Parse`，拼错直接抛）、`GlobalColorFactor`、`GlobalAlphaFactor`、`GlobalColor`（`Color.ConvertStringToColor`）。**其余任何写在 `<Brush>` 上的属性被静默忽略——不报错、不警告。** 之后按 `Layers` / `Styles` / `Animations` / `SoundProperties` 四个子节点继续处理。

`SoundProperties` 那段有个继承行为值得记：若该节点不存在、且这个 Brush 的两个音效字典都为空、且 `DefaultBrush != null`，就把 `DefaultBrush.SoundProperties` 拷过来。也就是说**没写音效的 Brush 会继承 `DefaultBrush` 的音效**。

**第四，`CheckForUpdates` 是文件监视器，不是版本检测。** 它比对 `_lastWriteTimes`（每次 `LoadBrushFromFileAux` 记下的 `File.GetLastWriteTime`）与当前值，任何一个文件时间变了、或某个已记录的文件消失了、或出现了没记录过的新文件，就整体 `LoadBrushes()` 再触发 `BrushChange`。构造函数订阅的 `ResourceDepot.OnResourceChange` 就是它的自动触发源。**这不是热重载补丁，是整表重建**——所有 [Brush](../Brush) 实例都会被换掉。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushFactory(ResourceDepot resourceDepot, string resourceFolder, SpriteData spriteData, FontFactory fontFactory)`（`:41`） | 保存四个依赖，初始化三个字典，**并订阅 `resourceDepot.OnResourceChange += this.OnResourceChange`**。副作用型构造器：不释放 `BrushFactory` 就会一直挂在 depot 上。 |
| `Initialize` | `public void Initialize()`（`:61`） | 单行 `this.LoadBrushes();`。**必须在构造之后显式调用一次**，否则 `_brushes` 为空、所有 `GetBrush` 返回 null。 |
| `Brushes` | `public IEnumerable<Brush> Brushes`（`:18`） | 全部已加载 Brush 的值集合。 [UIContext](../UIContext) 的 `Brushes` 属性（`UIContext.cs:97`）直接转发它。 |
| `DefaultBrush` | `public Brush DefaultBrush`（`:28`） | `_brushes.ContainsKey("DefaultBrush") ? _brushes["DefaultBrush"] : null`。**注意字面量是 `"DefaultBrush"`，不是 `"Default"`**——Brush 内部那个 `"Default"` 是层/样式名，与此无关。找不到就是 null。 |
| `GetBrush` | `public Brush GetBrush(string name)`（`:962`） | `TryGetValue` → 条目或 **null**。**不做 null 入参防护**（`TryGetValue(null, ...)` 抛 `ArgumentNullException`）。这是模组侧最常用的入口。 |
| `LoadBrushFile` | `public void LoadBrushFile(string name)`（`:889`） | 包 try/catch 调私有的 `LoadBrushFromFileAux`。异常被吞成 `Debug.FailedAssert("Failed to load brush from file: " + name)`。**加载不存在的文件只是一条断言，不抛。** |
| `SaveBrushAs` | `public bool SaveBrushAs(string name, Brush brush)`（`:973`） | 从 `_brushCategories[name]` 拿到源 XML 路径 → `XmlDocument.Load` → 找到 `Name` 匹配的节点 → `SaveBrushTo` → **写文件** → 返回 true；找不到节点返回 false。**若 `name` 不在 `_brushCategories` 里，先 `FailedAssert("Brush not found")` 然后 `this._brushCategories[name]` 直接 `KeyNotFoundException`。** |
| `CheckForUpdates` | `public void CheckForUpdates()`（`:1013`） | 比对文件时间；有变化就 `LoadBrushes()` 并触发 `BrushChange`。构造函数订阅的 `OnResourceChange`（`:55`）会调它。 |
| `BrushChange` | `public event Action BrushChange;`（`:1054`） | 整表重建完成后的通知。**唯一触发点在 `CheckForUpdates` 里**，且只在真的发生变化时触发。没有任何入参，订阅者需要自己重新 `GetBrush`。 |

## 真实示例

用官方那份 `BrushFactory` 之外**自己建一份**（这样 mod 的 Brush 不会污染全局资源表，也不会被 `CheckForUpdates` 清掉）：

```csharp
private static BrushFactory CreateIsolatedFactory(UIContext context)
{
    BrushFactory factory = new BrushFactory(context.ResourceDepot, "Brushes", context.SpriteData, context.FontFactory);
    factory.Initialize();
    factory.BrushChange += delegate () { OnIsolatedBrushesReloaded(factory); };
    return factory;
}

private static void OnIsolatedBrushesReloaded(BrushFactory factory)
{
    Brush refreshed = factory.GetBrush("DefaultBrush");
    if (refreshed != null)
    {
        // 整表已被替换，重新取一次引用
        CurrentBaseBrush = refreshed;
    }
}
```

遍历全部已加载 Brush，按名字建索引——注意 `Brushes` 只给值集合，重名由 `GetBrush` 的字典语义保证唯一：

```csharp
private static Dictionary<string, Brush> IndexAllBrushes(BrushFactory factory)
{
    Dictionary<string, Brush> index = new Dictionary<string, Brush>();
    foreach (Brush brush in factory.Brushes)
    {
        if (!string.IsNullOrEmpty(brush.Name) && !index.ContainsKey(brush.Name))
        {
            index.Add(brush.Name, brush);
        }
    }
    return index;
}
```

只读地取一份 Brush 并立刻克隆，切断与全局表的共享（**推荐写法**）：

```csharp
private static Brush CloneBrushByName(BrushFactory factory, string name)
{
    Brush source = factory.GetBrush(name);
    if (source == null) { return null; }
    return source.Clone();
}
```

## 风险与边界

- **忘记 `Initialize()` 就一切为空。** 构造函数只建字典不加载文件。不调用 `Initialize()` 时 `GetBrush` 全部返回 null，且**没有任何警告**。
- **`SaveBrushAs` 会写磁盘。** 它把 XML 文档加载、改写、保存回**原始路径**——也就是游戏资源目录（mod 的 `Brushes/*.xml`）。想「导出到一个新文件」它做不到；只想导出到别处必须自己写 `XmlDocument`。
- **`SaveBrushAs` 对未知名字会崩。** `FailedAssert("Brush not found")` 之后紧接着就是 `_brushCategories[name]` 索引器 → `KeyNotFoundException`。**先 `GetBrush` 判一次非 null 再调。**
- **`SaveBrushAs` 的返回值只表示「节点找到并已保存」**，不表示保存成功。磁盘写失败不会体现在返回值里。
- **`LoadBrushFile` 吞掉所有异常。** XML 格式错、属性名拼错导致 `Enum.Parse` 抛、字体名找不到……一律变成一条 `FailedAssert`。文件里其余 Brush 也不加载——因为异常发生在 `LoadBrushFromFileAux` 中途，`_brushes` 处于**半加载状态**。
- **`OverrideBrush` 的加载顺序依赖。** 覆盖者所在文件必须排在目标之后，否则触发 `FailedAssert("Failed to find brush for override: X")`。而 `GetBrushesNames()` 的顺序 mod 控制不了。
- **挂起队列每次文件加载后清空。** 这意味着「在最早加载的文件里覆盖一个晚加载的目标」必然失败。
- **同时写 `BaseBrush` 与 `OverrideBrush` 会断言。** 代码先 `FailedAssert` 但**继续执行**——两个分支都跑，最终走 `OverrideBrush` 那一路。
- **brush 级只有 9 个属性被识别。** 在 `<Brush>` 上写 `Color` / `Sprite` / `AlphaFactor` 会被静默忽略——这些要写在 `<Styles>` 里的对应 style 上，或写在 `<Layers>` 里。
- **`CheckForUpdates` 是整表替换。** 一旦触发，所有已取到的 [Brush](../Brush) 引用全部作废（字典被 `Clear` 后重建）。持有引用的代码必须重新 `GetBrush`。资源库扫描开启时，mod 开发期间改一个 XML 文件就可能触发一次全量重载。
- **构造函数泄漏订阅。** `OnResourceChange` 只加不减，`BrushFactory` 没有实现 `IDisposable`。反复创建隔离实例会持续在 `ResourceDepot` 上累积委托。
- **mod 自带的 Brush 需要重新启动才可见吗？** 不必——`CheckForUpdates` 就是为此存在的。但前提是 `ResourceDepot` 那边启用了变更监视（`StartWatchingChangesInDepot`），这不在本类职责内。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public 签名集合比对：**15 条签名，增减均为 0**（含嵌套的 `event Action BrushChange` 与私有 `readonly struct BrushOverrideInfo` 不计入公开面）。字节哈希 `76e5c64f` → `1356bb52` → `4c822034` → `c8e9f27c`，四组互异，说明实现体持续演进。

**结论：跨 1.3 → 1.5 升级不需要为本类改代码。** 需要留意的是它解析出来的产物形状会变——见 [BrushLayer](../BrushLayer)：1.3.15 起 [BrushLayer](../BrushLayer) 新增了三个公有字段（`ImageFitType` / `ImageFitHorizontalAlignment` / `ImageFitVerticalAlignment`），而 `SaveBrushTo` 的反射式写回逻辑（`BrushFactory.cs:826` 附近的 `AddAttributeTo`）可能会因此写出新的 XML 属性。老存档 Brush 被新版本保存一次之后 XML 就多出字段了。

## 依赖关系

- 产物：[Brush](../Brush)，以及间接的 [BrushLayer](../BrushLayer)、[Style](../Style) / [StyleLayer](../StyleLayer)、[BrushAnimation](../BrushAnimation) / [BrushAnimationProperty](../BrushAnimationProperty) / [BrushAnimationKeyFrame](../BrushAnimationKeyFrame)、[SoundProperties](../SoundProperties) / [AudioProperty](../AudioProperty)
- 依赖的资源：`TaleWorlds.Library.ResourceDepot`（文件与目录枚举 + `OnResourceChange` 事件）、`SpriteData`（解析 sprite 名与 `OverlaySprite`）、`FontFactory`（解析 `Font` 属性）
- 创建方：`TaleWorlds.Engine.GauntletUI` 里的静态单例 `UIResourceManager`（不在本桶）持有唯一一份实例，其 `RefreshBrushFactory()` 负责 `new BrushFactory(...)` + `Initialize()`；[UIContext](../UIContext) 自己只会在 `Initialize()` 与 `RefreshResources` 两条路径上重建一份（`UIContext.cs:204`）
- 消费方：[UIContext](../UIContext) 的 `GetBrush` / `Brushes` / `DefaultBrush`；[ConstantDefinition](../ConstantDefinition)（prefab 层的 `Brush` 类型常量）与 `TaleWorlds.GauntletUI.PrefabSystem.WidgetExtensions` 都直接调 `GetBrush`
- 断言依赖：`TaleWorlds.Library.Debug.FailedAssert`
- 桶首页：[gui API 分区](../)