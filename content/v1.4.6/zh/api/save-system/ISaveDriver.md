---
title: "ISaveDriver"
description: "存档后端的抽象接口：八个方法覆盖落盘、列档、读元数据、读档、删档与异步判定；1.4.6 里三个实现分属同步文件、内存与异步文件。"
---
# ISaveDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface ISaveDriver`
**Source:** `TaleWorlds.SaveSystem/ISaveDriver.cs`

## 概述

`ISaveDriver` 是「存档数据最终怎么落到介质上」的抽象边界。它完全不碰对象图——遍历、序列化、还原都由 `SaveContext` / `LoadContext` 负责，那些在 [SaveManager](../SaveManager) 那一层。它只管八件事：写一份存档、列出存档条目、列出存档名、只读元数据、读一份存档、删一份存档、判断某份存档是否存在、判断自己是否异步。

1.4.6 的 `TaleWorlds.SaveSystem` 目录里有三个实现，行为差别很大，选用哪个直接决定你的保存流程能不能拿到最终结果：

| 实现 | 介质 | `IsWorkingAsync` | 特性 |
| --- | --- | --- | --- |
| `FileDriver` | `PlatformDirectoryPath(User, "Game Saves\\")` 下的 `.sav` | `false` | deflate 压缩后写文件；`Load` 会按元数据里的应用版本决定走旧版反序列化器还是新版 |
| `InMemDriver` | 进程内一个 `byte[]` 字段 | `false` | 只保留**最后一份**存档，`Save` 直接覆盖；`GetSaveGameFileInfos` 与 `GetSaveGameFileNames` 恒返回空数组，`IsSaveGameFileExists` 恒为 false |
| `AsyncFileSaveDriver` | 文件系统，内部包一个 `FileDriver` | `true`（写成 `bool ISaveDriver.IsWorkingAsync()`） | 八个成员**全是显式接口实现**；`Save` 用 `Task.Run` 起后台任务，且每次先 `WaitPreviousTask()` 把上一次未完成的保存等完 |

要注意 `Save` 的返回类型是 `Task<SaveResultWithMessage>` 而不是 `void`。三个实现里 `FileDriver` 与 `InMemDriver` 都用 `Task.FromResult` 立刻兑现，`AsyncFileSaveDriver` 才真的挂起。所以**「返回类型是 Task」不等于「异步」**，判断要看 `IsWorkingAsync()`，或者看 `Task.IsCompleted`。

## 心智模型

把存档想成三段管道：**类型定义**（哪些类型有哪些 saveId）→ **对象图**（哪些对象被哪些对象引用）→ **字节**（怎么编码、存哪）。接口落在第三段的末端，[SaveManager](../SaveManager) 的 `Save` / `Load` 落在第二、三段的接缝上。

`saveName` 是这份接口所有方法的通用主键，语义由实现决定：`FileDriver` 把它拼成 `saveName + ".sav"` 放到存档目录根下，**它自己不加扩展名**，所以调用方传一个不带后缀的名字即可，传了 `.sav` 就会得到 `.sav.sav`。

「只读元数据」这条路径值得单独说：`LoadMetaData` 只解析文件头部的元数据段，不构造 `LoadData`、不解压也不读对象图。列存档槽（`GetSaveGameFileInfos`）正是靠它——`FileDriver` 的实现对每个 `*.sav` 逐个调 `SaveManager.LoadMetaData(名, this)`，并把 `metaData == null` 或版本为空的情况标成 `IsCorrupted`。想读「这个档是什么时候存的、我装了哪些 mod」而不付出读全档的代价，就用这条路。

同步与异步的差别会一路传染到 [SaveManager](../SaveManager) 的返回值：驱动同步时 `SaveManager.Save` 返回终态 `SaveOutput`；驱动异步时返回 continuing 形态，真正的结果要等 `Save` 返回的那个 `Task` 兑现后自行取。**在 `AsyncFileSaveDriver` 上把 `SaveManager.Save` 当同步用，坏档会留到玩家实际读档时才炸。**

## 关键成员

### 写入

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Save` | `Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)` | 把已序列化好的 `gameData` 与元数据落盘。`version` 不是存档格式版本而是业务版本号——三个实现都把它塞进元数据（`FileDriver` 写 `"Version"`，`InMemDriver` 写 `"version"`，键名不一致，别指望读回来时键名统一）。返回的任务兑现后才拿到 `SaveResult` 与错误消息 |

### 枚举

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetSaveGameFileInfos` | `SaveGameFileInfo[] GetSaveGameFileInfos()` | 列出全部存档条目，每项含名字、元数据与是否损坏。**代价很高**：`FileDriver` 的实现会对每个文件重新调一次 `LoadMetaData`。`InMemDriver` 恒返回空数组 |
| `GetSaveGameFileNames` | `string[] GetSaveGameFileNames()` | 只要名字，不要元数据。刷新存档列表但暂时不显示日期 / 版本时用它 |

### 读取

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `LoadMetaData` | `MetaData LoadMetaData(string saveName)` | 只解析元数据，不构造 `LoadData`。`FileDriver` 在文件读不出来时 `Debug.Print` 后返回 **null**，不抛异常 |
| `Load` | `LoadData Load(string saveName)` | 读全档，返回同时含 `MetaData` 与 `GameData` 的 `LoadData`。`FileDriver` 在解析异常时 catch 住、打印栈并返回 **null**；`InMemDriver` 从不判空，`_data` 是空数组时行为取决于流读取结果 |

### 删除与存在性

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Delete` | `bool Delete(string saveName)` | 删一份存档。`FileDriver` 返回是否真的删掉了东西（文件不存在时 false）；`InMemDriver` 无条件把内存清空并返回 true |
| `IsSaveGameFileExists` | `bool IsSaveGameFileExists(string saveName)` | 存在性判断。**`InMemDriver` 恒返回 false，尽管它刚刚可能成功存过一份**——这是最容易误判的一条 |

### 异步判定

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsWorkingAsync` | `bool IsWorkingAsync()` | 本驱动的 `Save` 是否会挂起。`FileDriver` 与 `InMemDriver` 返回 false；`AsyncFileSaveDriver` 用显式接口实现返回 true，**只能通过接口引用调用** |

## 怎么用

### 怎么拿到它

`ISaveDriver` 是 `TaleWorlds.SaveSystem/ISaveDriver.cs:8` 的接口，**全文 35 行、八个成员**，没有实现类在 `TaleWorlds.SaveSystem` 里——真正的实现由游戏本体提供，mod 侧拿到的是现成实例。

它八个成员的形状很不齐，注意 `Save` 是异步的：

- `Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`（`:11`）——**返回 `Task`**，其余全是同步 `bool` / 引用类型。
- `SaveGameFileInfo[] GetSaveGameFileInfos()`（`:15`）、`string[] GetSaveGameFileNames()`（`:18`）
- `MetaData LoadMetaData(string saveName)`（`:21`）
- `LoadData Load(string saveName)`（`:24`）
- `bool Delete(string saveName)`（`:27`）、`bool IsSaveGameFileExists(string saveName)`（`:30`）
- `bool IsWorkingAsync()`（`:33`）

**你拿它的场景是「存档 UI」而不是「写存档」。** [SaveManager](../SaveManager) 的 `Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`（`SaveManager.cs:69`）和 `Load(string saveName, ISaveDriver driver)`（`:149`）都只接受 `ISaveDriver`，而 `Game.Save(...)`（`Game.cs`）也会把它往下传。所以写存档时你**不需要自己实现它**——引擎已经把 driver 传下去了。

自定义存档界面（列档、删档）才是实现它的场景。

### 典型用法

列出存档、删档、读元信息——这些是同步的，可以直接调：

```csharp
using TaleWorlds.SaveSystem;

ISaveDriver driver = theEngineSaveDriver;      // 引擎给的实例，mod 不自己 new

foreach (SaveGameFileInfo info in driver.GetSaveGameFileInfos())      // ISaveDriver.cs:15
{
    MetaData meta = driver.LoadMetaData(info.SaveName);               // :21
    Debug.Print(meta.GetApplicationVersion().ToString(), 0);
}

// 删除（删前先判存在）
if (driver.IsSaveGameFileExists("slot_1"))                              // :30
{
    bool ok = driver.Delete("slot_1");                                 // :27
}
```

写存档用 [SaveManager](../SaveManager) 而不是直接调 driver：

```csharp
SaveOutput output = SaveManager.Save(Game.Current, metaData, "slot_1", driver);   // SaveManager.cs:69
// Save 内部的 driver.Save 是 Task<...>，由 SaveManager 驱动，不要自己 await
```

### 最容易踩的坑

**把 `Save` 当同步方法用，或者自己 `await` 它。** `Task<SaveResultWithMessage> Save(...)`（`ISaveDriver.cs:11`）返回的是 `Task`，但整个存档流程已经被上层包好了：`SaveManager.Save(...)`（`SaveManager.cs:69`）内部建 `SaveContext` 并驱动它，返回给调用方的是 `SaveOutput` 而不是 `Task`。你在模组里如果绕过 `SaveManager` 直接调 `driver.Save(...)`，拿到的是一个**没人 await 的 Task**——文件可能根本没落盘，或者你在后台线程上收到了完成回调。正确路径是 `Game.Current.Save(...)`（[Game](../../core-extra/Game) 里那个带 `Action<SaveResult>` 回调的重载）或 `SaveManager.Save(...)`。

第二个坑是 `IsWorkingAsync()`（`:33`）——它反映的是 driver **当前是否正忙**。它在存档进行中返回 true，而 `Delete`（`:27`）、`Save`（`:11`）都不会因为忙而拒绝你（接口层没有断言）。后果是你在自动存档进行中删档，得到一个静默失败的 `false`，没有任何错误信息。存档 UI 里必须自己先查 `IsWorkingAsync()` 再决定按钮是否可点。

## 真实示例

同步驱动下的保存—读回：

```csharp
// ISaveDriver / SaveManager / MetaData 都是游戏 API；
// 下面这段展示的是 mod 自己做「存一份再读回来」时的实际调用形状
public class QuicksaveRoundTrip
{
    private readonly ISaveDriver _driver;
    private readonly MetaData _metaData;

    public QuicksaveRoundTrip(ISaveDriver driver, MetaData metaData)
    {
        _driver = driver;
        _metaData = metaData;
    }

    public bool Store(object snapshot)
    {
        SaveManager.InitializeGlobalDefinitionContext();

        SaveOutput output = SaveManager.Save(snapshot, _metaData, "mod_quicksave", _driver);

        // 驱动同步时这里已经有终态；异步时 output 是 continuing 形态
        if (output.IsContinuing)
        {
            return false;
        }

        return output.Successful;
    }

    public string PeekApplicationVersion()
    {
        // 只读元数据，不构造 LoadData
        MetaData loaded = _driver.LoadMetaData("mod_quicksave");
        return loaded == null ? null : loaded["ApplicationVersion"];
    }
}
```

列档并存判断存在性：

```csharp
// 读者侧演示：用驱动的枚举与存在性接口拼一个存档列表
public class SlotLister
{
    private readonly ISaveDriver _driver;

    public SlotLister(ISaveDriver driver)
    {
        _driver = driver;
    }

    public string[] Names()
    {
        return _driver.GetSaveGameFileNames();
    }

    public int DescribeSlots()
    {
        SaveGameFileInfo[] infos = _driver.GetSaveGameFileInfos();
        int healthy = 0;

        foreach (SaveGameFileInfo info in infos)
        {
            if (info.IsCorrupted)
            {
                continue;
            }

            healthy++;
        }

        return healthy;
    }

    public bool Has(string saveName)
    {
        return _driver.IsSaveGameFileExists(saveName);
    }
}
```

自定义驱动时八个方法一个都不能少——少一个就编译不过：

```csharp
// 读者侧演示驱动，不是游戏 API；八个方法对应接口的八个成员
public class CloudSlotDriver : ISaveDriver
{
    public bool IsWorkingAsync()
    {
        return true;
    }

    public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)
    {
        byte[] payload = gameData.GetData();
        Debug.Print("would upload " + payload.Length + " bytes as " + saveName, 0);
        return Task.FromResult(SaveResultWithMessage.Default);
    }

    public MetaData LoadMetaData(string saveName)
    {
        Debug.Print("would fetch header for " + saveName, 0);
        return null;
    }

    public LoadData Load(string saveName)
    {
        Debug.Print("would download " + saveName, 0);
        return null;
    }

    public SaveGameFileInfo[] GetSaveGameFileInfos()
    {
        return new SaveGameFileInfo[0];
    }

    public string[] GetSaveGameFileNames()
    {
        return new string[0];
    }

    public bool Delete(string saveName)
    {
        Debug.Print("would drop " + saveName, 0);
        return true;
    }

    public bool IsSaveGameFileExists(string saveName)
    {
        return false;
    }
}
```

## 风险与边界

- **`Save` 返回 Task 不等于异步。** `FileDriver` 与 `InMemDriver` 都用 `Task.FromResult` 立刻兑现。判断异步看 `IsWorkingAsync()` 或 `Task.IsCompleted`，不要看返回类型。
- **`AsyncFileSaveDriver` 的成员全是显式接口实现。** 源码里写的是 `ISaveDriver.Save(...)` / `bool ISaveDriver.IsWorkingAsync()` 等，**只有持有接口类型时才调得到**，变量声明成具体类会编译不过。
- **异步驱动的保存是串行的。** `AsyncFileSaveDriver.Save` 先调 `WaitPreviousTask()` 等上一次保存完成（等不到就一直等），再 `Task.Run` 起新任务。连续快速保存会在调用方线程上阻塞，不是纯异步。
- **`saveName` 不要自带扩展名。** `FileDriver` 自己拼 `.sav`；传 `xxx.sav` 会存成 `xxx.sav.sav`，之后用 `xxx.sav` 去找就找不到。
- **`LoadMetaData` 与 `Load` 返回 null 而不是抛异常。** `FileDriver` 的两处失败路径都是打印日志后返回 null。所有调用点都要判空。
- **`IsSaveGameFileExists` 在 `InMemDriver` 上恒为 false。** 它刚存进去的档也会报不存在。做「存在才读」的判断会跳过内存里那份。
- **`GetSaveGameFileInfos` 是重操作。** `FileDriver` 会对每个文件重新解析一次元数据；存档多时别在每帧调用。
- **`GetSaveGameFileInfos` 与 `GetSaveGameFileNames` 在 `InMemDriver` 上恒为空。** 用内存驱动时存档列表永远显示空，这是设计而非 bug。
- **`version` 参数被塞进元数据且键名不一致。** `FileDriver` 写 `"Version"`，`InMemDriver` 写 `"version"`。读回时不要假设键名。
- **`Delete` 的返回值语义随实现变。** `FileDriver` 返回「是否真的删掉了」，`InMemDriver` 无条件 true。用它做 UI 反馈时，内存驱动会永远报成功。
- **接口本身不含版本或并发约定。** `IsWorkingAsync` 为 true 的实现只保证 `Save` 挂起，不保证 `GetSaveGameFileInfos` 在保存进行中可用。自己写驱动时要自己想清楚这些。
- **`MetaData` 与 `GameData` 是 1.4.6 的具体类型。** 接口签名直接依赖它们，实现方绕不开。

## 跨版本提示

本机 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ISaveDriver.cs` **存在且可读**——派单里「另一 worker 说 `Bannerlord.Source/bin/` 下没有 `.cs`」的说法经实测不成立：`bannerlord-1.4.5/Bannerlord.Source/bin/` 下共 **6222 个 `.cs` 文件**（`bannerlord-1.4.5` 全树 8583 个，其中 2361 个在 `bin/` 之外）。逐条比对 1.4.5 与 1.4.6 的八个方法签名，**两者完全一致，没有增删改**。同一目录下的三个实现 `FileDriver` / `InMemDriver` / `AsyncFileSaveDriver` 在两个版本里也都存在。所以这页描述的接口面在 1.4.5 上可直接照搬。

## 依赖关系

- 唯一调用方：[SaveManager](../SaveManager) — `Save` / `Load` / `LoadMetaData` 三个入口都把驱动当参数收下，转发后再处理定义上下文与结果包装。
- 存档特性：[SaveableTypeDefiner](../SaveableTypeDefiner) — 类型定义表由 definer 填充，驱动只搬运结果。
- 字段特性：[SaveableFieldAttribute](../SaveableFieldAttribute) — 被序列化字段的标注，决定对象图里出现什么。
- 属性特性：[SaveablePropertyAttribute](../SaveablePropertyAttribute) — 与上者对应的属性版本标注。
- 桶索引：[save-system API 目录导览](../)
- 分层说明：[模块地图](../../../architecture/module-map)