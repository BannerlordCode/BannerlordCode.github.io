---
title: "HotKeyManager"
description: "全局按键绑定注册表：mod 注册一个 GameKeyContext，玩家可见的字符串 id 通过它解析，任何重新绑定都会回写到配置目录下的 XML 文件。写入由 Tick() 异步惰性触发，因此在改键与下一帧之间崩溃会丢失该次修改。"
---
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem  
**Module:** TaleWorlds.InputSystem  
**Type:** `public static class HotKeyManager`  
**Base:** 无  
**File:** `TaleWorlds.InputSystem/HotKeyManager.cs`

## 概述

`HotKeyManager` 是全局按键绑定注册表。游戏采用的模式是：每个界面或功能持有一个 `GameKeyContext` 子类，内部是有序的 `MBList<GameKey>` 加上按 id 索引的 `HotKey` 与 `GameAxisKey` 字典；该 context 被交给 `HotKeyManager.RegisterInitialContexts`（对于更晚加载的 mod 则是 `RegisterContext`），此后该功能再也不直接接触 `GameKey` 对象——它调用 `HotKeyManager.GetHotKeyId(category, hotKeyId)`，把返回的**用户可见字符串**塞进 `TextObject` 或本地化调用。这层间接就是全部意义所在：玩家在设置界面改了键之后，功能手里早已持有的同一个字符串会自动改变含义，而无需重新加载该功能。

持久化是一次惰性、由 tick 驱动的异步写。`Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)` 存下目标路径与 R 键左右互换标志。`MarkForSave()` 置脏位；下一次 `Tick(dt)` 调用私有的 `async void HandleSaveLoad()`，其中 await `LoadAsync()` 与 `SaveAsync()`，完成后置上 `_needsKeybindsChangedEvent`，让 `OnKeybindsChanged` 的订阅方刷新自己的字符串。`SaveAsync` 把每个分类序列化成 `<HotKeyCategories hotkeyEditEnabled=... version="5.1">`，并且——这一点很关键——会把旧文档里存在、而本次运行**没有**注册的分类重新 import 进来，因此被停用模块的绑定能在多次开关之间存活。

## 心智模型

把它当成**“一张可变键位表前面的字符串工厂，背后挂着一个惰性写入的 XML 文件”**：

- **注册只发生一次，解析却持续发生**。`RegisterInitialContexts` 会先 `_categories.Clear()`——第二次调用会静默丢弃此前注册的一切。`RegisterContext` 仅在分类 id 不存在时添加，并置上 `_needsLoading`，让已保存的文档被重新读入。
- **典型调用顺序**：`ViewSubModule` 很早就执行 `HotKeyManager.Initialize(...)` 与 `RegisterInitialContexts(...)`；`Tick(dt)` 由同一个子模块每帧调用一次；从更晚的钩子里注册自定义分类的 mod 调用 `RegisterContext(myContext)`，然后要等到 `OnKeybindsChanged` 之后，才去解析第一批要显示的本地化字符串。
- **常见误用陷阱 —— 第一次 `Tick` 之后才注册**。`_needsLoading` 与 `_needsSaving` 只在 `Tick` 内部被处理。注册完却从不 tick（或在同一帧内、在 tick 发生之前就去读字符串），你看到的会是**默认**绑定；若文档还没读入，则可能是空字符串。
- **常见误用陷阱 —— 未注册的 id 不会抛异常**。`GetHotKeyId(string, string)` 命中缺失会 `Debug.FailedAssert` 并返回 `""`；`GetHotKeyId(string, int)` 返回 `"invalid"`。而 `GetCategory(name)` 与 `GameKeyContext.GetHotKeyId` 的重载是直接字典索引，**会**抛异常。因此热键 id 打错，在游戏里表现为一个空白标签，而不是异常——QA 阶段极易漏掉。
- **常见误用陷阱 —— 序列化与否由 `GameKeyContextType` 决定，不由你决定**。`RegisterInitialContexts` 会自动传入 `ignoreSerialize: context.Type == AuxiliaryNotSerialized`。因此类型为 `AuxiliaryNotSerialized` 的 context 永远不会进入 XML；`Reset()` 仍会在内存中把它恢复成默认值。请有意识地选择该类型。
- **文档带版本属性**。`_versionOfHotkeys` 为 `5.1f`，每次保存都会写入；读到版本不同的文档会置上 `_notifyDocumentVersionDifferent`，而 `ShouldNotifyDocumentVersionDifferent()` 只会返回它**一次**（读取即清标志）。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你的界面有玩家应当能重新绑定的按键。派生一个 `GameKeyContext`、注册它，并且此后只通过 `GetHotKeyId` 引用按键。
- 你想对“重新绑定”做出反应：订阅 `HotKeyManager.OnKeybindsChanged` 并重新解析自己的字符串。
- 你要为一个比基础分类更晚加载的 mod 新增分类。

**不该用它的情况：**
- 你需要一个不可重绑定的按键（锁定视角下的移动、调试键）。请直接用 `InputManager` / `InputKey`——放在热路径上的可重绑定 `HotKey` 会给你意外。
- 你在任务（mission）的 `MissionBehavior` tick 里读按键。解析本身很便宜，但你缓存下来的*字符串*会在玩家改键那一刻失效；请在 `OnKeybindsChanged` 里重新解析，而不是跨帧缓存。
- 你想检测某个具体按键被按下。那是 `InputManager.IsKeyPressed` / `GameKey` 的轮询 API，不是这个管理器。

## 依赖关系

- [GameKeyContext](../GameKeyContext) —— 你派生并注册的抽象分类（`GameKeyCategoryId`、`RegisteredGameKeys`、`RegisteredHotKeys`、`RegisteredGameAxisKeys`、`GameKeyContextType`）。
- [GameKey](../GameKey) —— context 内一个按下标寻址的绑定；它的 `StringId`、`KeyboardKey`、`ControllerKey` 与默认值正是 `Reset()` 恢复的对象。
- [HotKey](../HotKey) —— context 内一个按 id 寻址的绑定（可含修饰键、带一组键）。
- [MBSubModuleBase](../../core/MBSubModuleBase) —— mod 注册自己 context 的 `SubModule` 钩子；基础游戏的分类在同一阶段由 view 子模块注册。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 需要在界面销毁后继续工作的改键处理器，通常由它持有生命周期。

## 主要成员

### `public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)`

存下配置文件路径，并把 R 键左右互换标志推入 `GameKeyContext`（在那里是静态字段）。由 view 子模块恰好调用一次。它本身**不会**触发加载——加载由第一次 `Tick` 完成。

### `public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts)`

先 `_categories.Clear()`，然后以 `ignoreSerialize = (context.Type == GameKeyContextType.AuxiliaryNotSerialized)` 注册每个 context。
- **返回值**：无。
- **副作用**：置上 `_needsLoading`，于是下一次 `Tick` 读取 XML 文档，并把已保存的绑定覆盖到已注册的默认值之上。
- **陷阱**：这是**重置**，不是追加。

### `public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false)`

若 `GameKeyCategoryId` 尚未存在则添加；`ignoreSerialize` 为 true 时把该 id 加入 `_serializeIgnoredCategories`；并置上 `_needsLoading`。注册一个已存在的分类是空操作（不重复、不覆盖）。

### `public static string GetHotKeyId(string categoryName, string hotKeyId)`

经由 `_categories[categoryName].GetHotKeyId(hotKeyId)` 解析。分类缺失时 `Debug.FailedAssert` 并返回 `""`；热键 id 缺失时由 context 记录日志并同样返回 `""`。
- **返回语义**：是一个*可本地化的显示字符串*（可能是 `"None"`），不是键码。可以直接塞进 `TextObject`。

### `public static string GetHotKeyId(string categoryName, int gameKeyId)`

按下标的重载；分类缺失时返回 `"invalid"`，否则委托给 `GameKeyContext.GetHotKeyId(int)`，后者直接索引 `_registeredGameKeys[gameKeyId]`。

### `public static GameKeyContext GetCategory(string categoryName)`

直接字典索引——未知分类会抛 `KeyNotFoundException`。当你需要 context 对象本身（枚举已注册按键）时使用，且应先确认该分类存在。

### `public static void Tick(float dt)`

由 view 子模块每帧调用的泵：
1. 若不在 `_isSaveLoadInProgress` 中，调用私有的 `async void HandleSaveLoad()`。
2. 一旦没有保存/加载在进行且 `_needsKeybindsChangedEvent` 已置位，就触发 `OnKeybindsChanged` 并清标志。

由于 `HandleSaveLoad` 是 `async void`，**工作在 `Tick` 返回之后继续**；随后的 `Tick` 只是在 `_isSaveLoadInProgress` 为 true 时跳过处理。`LoadAsync` / `SaveAsync` 内的异常会被捕获、经 `Debug.FailedAssert` 上报，然后吞掉。

### `public static void MarkForSave()`

置 `_needsSaving = true`。在下一次 `Tick` 之前什么都不会写。在你自己的设置界面里改完 `HotKey.Keys` 或调用 `GameKey.ChangeKey` 之后调用它。

### `public static void Reset()`

遍历每个分类，把每个 `GameKey` 恢复为 `DefaultKeyboardKey ?? InputKey.Invalid`（手柄键同理），把每个 `HotKey.Keys` 恢复为 `DefaultKeys` 的副本，把每个轴键恢复为默认值。它只改内存——随后要 `MarkForSave()` 才会落盘。

### `public static bool ShouldNotifyDocumentVersionDifferent()`

返回“已保存文档由另一个热键版本写出”的待处理标志，并清掉它。每帧从设置界面调用一次以弹出警告。

### `public static event OnKeybindsChangedEvent OnKeybindsChanged`

保存成功（以及加载）之后触发，让持有已解析字符串的对象刷新。这是**静态事件**，界面销毁时务必退订，否则会泄漏。

## 使用示例

### 示例 1 —— mod 自有的按键分类

```csharp
using System.Collections.Generic;
using TaleWorlds.InputSystem;

public class MyModKeyContext : GameKeyContext
{
    public const int QuickSaveId = 0;
    public const string ToggleHudId = "toggle_hud";

    public MyModKeyContext()
        : base("MyModKeys", 1, GameKeyContextType.AuxiliarySerializedAndShownInOptions)
    {
        // 按下标寻址的槽位必须先存在，RegisterGameKey 才能填入。
        RegisterGameKey(new GameKey(QuickSaveId, "QuickSave", InputKey.F5));
        RegisterHotKey(new HotKey(ToggleHudId, "MyModGroup",
                                  new List<Key> { new Key(InputKey.F8) }));
    }
}
```

从子模块注册，之后只通过解析出来的字符串消费它：

```csharp
using TaleWorlds.InputSystem;

public class MyModInput
{
    private readonly MyModKeyContext _context;

    public MyModInput(MyModKeyContext context)
    {
        _context = context;
        HotKeyManager.OnKeybindsChanged += OnKeybindsChanged;
        HotKeyManager.RegisterContext(context);
    }

    private void OnKeybindsChanged()
    {
        // 重新解析：界面开着的时候玩家可能已经改键了。
        ToggleHudLabel = HotKeyManager.GetHotKeyId(_context.GameKeyCategoryId, MyModKeyContext.ToggleHudId);
    }

    public void Detach()
    {
        HotKeyManager.OnKeybindsChanged -= OnKeybindsChanged;   // 静态事件：必须退订
    }
}
```

### 示例 2 —— 在自定义设置项里改键，然后落盘

```csharp
using TaleWorlds.InputSystem;

public class MyOptionsEntry
{
    public void OnPlayerChoseBinding(InputKey newKey)
    {
        GameKeyContext context = HotKeyManager.GetCategory("MyModKeys");
        context.GetGameKey(MyModKeyContext.QuickSaveId).ChangeKey(newKey);

        HotKeyManager.MarkForSave();   // 由下一次 HotKeyManager.Tick 写盘
    }

    public void OnResetToDefaults()
    {
        HotKeyManager.Reset();
        HotKeyManager.MarkForSave();
    }
}
```

## 风险与崩溃边界

- **存档序列化**：本类持久化到 `EngineFilePaths.ConfigsPath` 下的**独立 XML 文档**，而不是战役存档。它会写入 `version` 属性（`5.1`），并把旧文档中存在、本次运行未注册的分类重新导入，因此把某个模块关掉再打开，其绑定仍会保留。但它**不会**清理失效绑定——你删掉的热键 id 会永远留在文件里，日后重新加上同名 id 会静默恢复旧绑定，而且没有任何 API 能把它剪掉。
- **跨域依赖**：`HotKeyManager` 位于 `TaleWorlds.InputSystem`，任务与 UI 代码都会引用它。从任一侧调用都安全，但*context 对象*属于注册它的人；在别的界面 finalize 之后再去解析它所拥有的按键，实质上就是一次释放后使用，尽管字典里引用还在。
- **加载时序**：`RegisterInitialContexts` 会清空表。若某个 mod 在基础 view 子模块**之前**的钩子里注册，它的 context 会被抹掉。请从更晚的钩子注册，或从 `OnGameStart` / 第一帧注册。反过来，早于第一次 `Tick` 注册的 mod 在那一帧还看不到已保存的文件，会读到默认值——把首次读取推迟。
- **ID 稳定性**：分类 id 与热键 id 都是**没有任何校验与版本机制**的普通字符串。改掉热键 id 会静默孤立玩家的绑定。`GameKey` 的 id 是绑定到 context 构造函数中声明顺序的整数下标——调整声明顺序会改变已有绑定对应的物理按键，且毫无提示。这两者跨版本都要保持稳定。
- **`RegisterContext` 静默忽略重复**。两个 mod 声明同一个 `GameKeyCategoryId` 时，第二个的按键变得不可达，且不抛异常。
- **保存是 `async void`**。在改键与 `SaveAsync` 完成之间崩溃、alt-tab 或退出进程都会丢失该次修改。`LoadAsync` / `SaveAsync` 捕获所有异常且只 `Debug.FailedAssert`，所以配置损坏或只读时会静默退化到默认值。
- **`GetCategory` 抛异常而 `GetHotKeyId` 返回 `""`**。只加固显示路径而忘了枚举路径，是只在 debug 版本里才出现 `KeyNotFoundException` 的常见原因。

## 跨版本提示

- **v1.3.x → v1.4.5**：公开接口未变——`Initialize`、`RegisterInitialContexts`、`RegisterContext`、两个 `GetHotKeyId` 重载、`GetCategory`、`GetAllCategories`、`Tick`、`Reset`、`MarkForSave`、`ShouldNotifyDocumentVersionDifferent` 以及 `OnKeybindsChanged` 事件的签名都保持一致。
- **v1.4.5**：`_versionOfHotkeys` 为 `5.1f`，每次保存都会写进文档。读到取值不同的文档会置上由 `ShouldNotifyDocumentVersionDifferent()` 排空的提示标志。
- **v1.4.5**：不存在 `Save()`、`Load()` 或 `Flush()` 公开方法——持久化只能通过 `Tick` 触达。不要写“`MarkForSave` 之后立即落盘”这种假设的 mod。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](../)
- ↔ 同级：[GameKeyContext](../GameKeyContext) —— 你派生并注册的分类类型
- ↔ 同级：[GameKey](../GameKey) —— 一个按下标寻址的绑定
- ↔ 同级：[HotKey](../HotKey) —— 一个按 id 寻址的绑定
- ↑ 钩子声明：[MBSubModuleBase](../../core/MBSubModuleBase)
- ↔ 跨桶：[CampaignBehaviorBase](../CampaignBehaviorBase) —— 改键处理器的长期持有者
