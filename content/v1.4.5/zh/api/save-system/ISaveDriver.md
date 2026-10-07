---
title: "ISaveDriver"
description: "存档落盘的抽象出口：读写、元数据、列举、删除、异步状态八个成员，是 mod 换存档位置或换压缩方式的唯一接缝。"
---

# ISaveDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface ISaveDriver`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/ISaveDriver.cs`

## 概述

存档系统在 [SaveManager](../SaveManager) 那一层就把「存到哪里」抽象掉了：`Save` / `Load` 两个方法只收一个 `ISaveDriver` 形参，所有实际 I/O 都由它完成。本接口共八个成员：写入 `Save`、读取 `Load`、读元数据 `LoadMetaData`、列举存档 `GetSaveGameFileInfos` / `GetSaveGameFileNames`、删除 `Delete`、存在性 `IsSaveGameFileExists`、以及异步状态 `IsWorkingAsync`。引擎自带两个实现——落盘的 [FileDriver](../FileDriver) 与内存的 [InMemDriver](../InMemDriver)，另有异步包装 [AsyncFileSaveDriver](../AsyncFileSaveDriver)。**这是 mod 唯一能把存档接到自定义后端（云同步、加密、内存）而不碰存档系统内部的接缝。**

## 心智模型

把它想成**档案馆的柜台**：存档系统只把「一叠四段字节 + 一张元数据表」递过来（见 [GameData](../GameData)），柜台决定这些纸塞进哪个抽屉、要不要压缩、要不要加密、什么时候能取回。推论有四条：

1. **写入是异步的，而且同步完成是一种「恰好已完成」的情形。** `Save` 返回 `Task<SaveResultWithMessage>`（`:8`）。[SaveManager](../SaveManager) 拿到它之后分三种情况：未完成 → `SaveOutput.CreateContinuing(task)`；已完成且非 Success → `CreateFailed`；已完成且 Success → `CreateSuccessful`。**所以「Save 返回了不代表写完了」，必须看 `SaveOutput` 的类型。**
2. **元数据有一条独立的读取通道。** `LoadMetaData(string saveName)`（`:14`）与 `Load`（`:16`）分开，意味着**可以只读元数据而不加载整个存档**——列存档列表、读存档头里的游戏状态与版本都走这条路。
3. **列举与存在性是两种粒度。** `GetSaveGameFileInfos()`（`:10`）返回 [SaveGameFileInfo](../SaveGameFileInfo) 对象数组（带路径、大小、预览图之类），`GetSaveGameFileNames()`（`:12`）只返回字符串数组。**一个是给 UI 用的，一个给逻辑用的。**
4. **`IsWorkingAsync()` 是给 UI 用的询问，不是能力开关。** `:22` 单独存在，意味着实现可以选择「支持异步写入」或「只是同步写完就返回」——调用方据此决定要不要转圈。**它不改变 `Save` 的返回类型**，两者始终是 `Task`。

## 如何使用

### 怎么拿到它

**不 new，从 [SaveManager](../SaveManager) 的调用里拿。** 两个静态入口：

- `SaveManager.Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`（`SaveManager.cs:77`）——它内部再调 `driver.Save(saveName, 1, metaData, saveContext.SaveData)`（`SaveManager.cs:103`）。**注意第二个参数 `1` 是硬编码的版本号**，不是读来的。
- `SaveManager.Load(string saveName, ISaveDriver driver)` / `Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`（`SaveManager.cs`）——内部调 `driver.Load(saveName)` 得 [LoadData](../LoadData)。

游戏本体在启动时把 [FileDriver](../FileDriver) 交给 [SaveManager](../SaveManager)。**mod 要换驱动，就得自己实现本接口并传给 `SaveManager`；不要试图去改 `SaveManager` 的静态状态。**

### 最小可运行片段

```csharp
// ISaveDriver 是 public 接口；实现它就能换掉存档后端
using System.Threading.Tasks;
using TaleWorlds.SaveSystem;

public class MyDriver : ISaveDriver
{
    public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)
    {
        byte[] bytes = gameData.GetData();            // 四段拼成一个 byte[]
        // TODO: 落盘 / 上传 / 加密
        return Task.FromResult(new SaveResultWithMessage(SaveResult.Success, "ok"));
    }

    public LoadData Load(string saveName)
    {
        byte[] bytes = LoadBytes(saveName);           // 你自己的读取
        return new LoadData(ReadMetaData(saveName), GameData.CreateFrom(bytes));
    }

    public MetaData LoadMetaData(string saveName) => ReadMetaData(saveName);
    public SaveGameFileInfo[] GetSaveGameFileInfos() => Array.Empty<SaveGameFileInfo>();
    public string[] GetSaveGameFileNames() => Array.Empty<string>();
    public bool Delete(string saveName) => false;
    public bool IsSaveGameFileExists(string saveName) => false;
    public bool IsWorkingAsync() => false;            // 同步实现就报 false
}

// 交给 SaveManager
SaveOutput output = SaveManager.Save(rootObject, gameStateMetaData, "slot1.sav", new MyDriver());
```

### 用它最容易踩的一条

**`Save` 返回 `Task` 不等于已经写完，判据在 `SaveOutput` 的类型上而不是返回值上。** [SaveManager](../SaveManager) 的三分支就是证据：任务未完成时给的是 `SaveOutput.CreateContinuing(task)`——**存档还在排队**。mod 若在 `SaveManager.Save` 返回后立刻去读文件，或者立刻触发读档，会撞上还没落盘的数据。想确认完成，要么轮询 `driver.IsWorkingAsync()`（`:22`），要么看 `SaveOutput` 是不是 continuing 形态。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Save` | `Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)` | `:8`。写入入口。第一个形参是存档名；第二个是版本号，由 [SaveManager](../SaveManager) 传**硬编码的 1**（`SaveManager.cs:103` 处可见）；第三个是游戏状态元数据（见 [MetaData](../MetaData)）；第四个是 [SaveContext](../SaveContext) 收集完的四段字节（见 [GameData](../GameData)）。返回 `Task`——**可能没写完**。 |
| `Load` | `LoadData Load(string saveName)` | `:16`。读取入口，返回 [LoadData](../LoadData)（`MetaData` + `GameData`）。[LoadContext](../LoadContext) 全程只从 `LoadData` 取字节，**不再回驱动**——所以驱动不需要实现任何读中转的接口。 |
| `LoadMetaData` | `MetaData LoadMetaData(string saveName)` | `:14`。**与 `Load` 分开的元数据通道**。[SaveManager](../SaveManager) 有 `LoadMetaData(string saveName, ISaveDriver driver)` 转发它。列存档、读档内游戏状态而不加载全档时走这条。 |
| `GetSaveGameFileInfos` | `SaveGameFileInfo[] GetSaveGameFileInfos()` | `:10`。返回结构化信息数组（见 [SaveGameFileInfo](../SaveGameFileInfo)），给存档选择界面用。**数组可以是空数组，但返回 null 会让调用方炸**——接口没有可空标注。 |
| `GetSaveGameFileNames` | `string[] GetSaveGameFileNames()` | `:12`。只要名字的轻量列举，给逻辑用（如「找最新的一个」）。与上一条是两个独立方法，**实现时通常一个从另一个派生**。 |
| `Delete` | `bool Delete(string saveName)` | `:18`。删除一个存档。返回值语义由实现决定（成功与否），**接口没有规定失败原因**。 |
| `IsSaveGameFileExists` | `bool IsSaveGameFileExists(string saveName)` | `:20`。存在性检查。UI 常用它在覆盖存档前确认。 |
| `IsWorkingAsync` | `bool IsWorkingAsync()` | `:22`。**给 UI 的能力询问**：当前是否还有异步写入在飞。它不改变 `Save` 的返回类型（始终 `Task`）；同步实现应老实返回 false。 |

## 真实示例

两个入口的真实调用形状（`TaleWorlds.SaveSystem/SaveManager.cs:103` 与读档侧的 `driver.Load(saveName)`）：

```csharp
// 保存：版本号 1 是硬编码的，不是从 MetaData 读来的
Task<SaveResultWithMessage> task = driver.Save(saveName, 1, metaData, saveContext.SaveData);
saveOutput = task.IsCompleted
    ? ((task.Result.SaveResult != SaveResult.Success)
        ? SaveOutput.CreateFailed(new SaveError[1] { new SaveError(task.Result.Message) }, task.Result.SaveResult)
        : SaveOutput.CreateSuccessful(saveContext.SaveData))
    : SaveOutput.CreateContinuing(task);

// 读取：LoadData 一手交出去，LoadContext 全程不再回驱动
LoadData loadData = driver.Load(saveName);
OperatingVersion = loadData.MetaData.GetApplicationVersion();
bool ok = new LoadContext(definitionContext, driver).Load(loadData, loadAsLateInitialize);
```

mod 视角的对照实验——`GetData` / `CreateFrom` 是配对的：

```csharp
// 存：GameData → byte[]
byte[] bytes = gameData.GetData();
// 取：byte[] → GameData
GameData back = GameData.CreateFrom(bytes);
// 这一对走的是 Header → Strings → ObjectData → ContainerData 的顺序，
// 与 GameData.Write / GameData.Read 的顺序不同，别混用（见 GameData 页）
Debug.Print("驱动自己落盘时用 GetData/CreateFrom 这一对，不要碰 Write/Read", 0);
```

## 依赖关系

- 唯一调用者：[SaveManager](../SaveManager)（`Save` 传版本 1，`Load` 只调 `Load` 与 `LoadMetaData`）
- 三个官方实现：[FileDriver](../FileDriver)（落盘）、[InMemDriver](../InMemDriver)（内存）、[AsyncFileSaveDriver](../AsyncFileSaveDriver)（异步包装）
- 载荷类型：[GameData](../GameData)（四段字节）、[MetaData](../MetaData)、[LoadData](../LoadData)（`MetaData` + `GameData`）
- 结果类型：`TaleWorlds.Library` 的 `SaveResultWithMessage` / `SaveResult`；包装见 [SaveOutput](../SaveOutput)
- 列举结果：[SaveGameFileInfo](../SaveGameFileInfo)
- 字节拼装：`GameData.GetData()` / `GameData.CreateFrom(byte[])`
- 与压缩相关的旁支：[ZipExtensions](../ZipExtensions)（扩展名决定底层格式）
- 读档消费方：[LoadContext](../LoadContext)（只从 `LoadData` 取字节）
- 体系全貌：../../../architecture/save-system