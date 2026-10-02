---
title: "ISaveDriver"
description: "存档读写的后端抽象：8 个方法把对象图数据落盘或读回。官方实现写文件，模组可以换成本地、加密或云端后端。"
---

# ISaveDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public interface ISaveDriver`
**Base:** 无（接口）
**Source:** `bannerlord-1.5.3/TaleWorlds.SaveSystem/ISaveDriver.cs`

## 概述

`ISaveDriver` 把「存档写到哪、怎么读回来」抽象成 8 个方法。`SaveManager` 只认识 `GameData` 与 `MetaData` 这两个抽象对象，具体的字节流由驱动负责。官方实现是文件系统驱动（`.sav` 文件），模组可以实现自定义驱动来做云存档、压缩、加密或多存档槽位。

## 心智模型

三个角色：

- **`MetaData`**：存档头（创建时间、游戏版本、模块列表）。列表界面只需要它，不需要读对象图。
- **`GameData`**：序列化后的完整数据。
- **`ISaveDriver`**：在两者与存储介质之间搬运。

`Save` 返回 `Task<SaveResultWithMessage>`（**异步**），其余方法同步。这意味着 `SaveManager.Save` 内部会等待这个 Task。

**`IsWorkingAsync()` 是并发控制的核心**：存档系统在有异步操作进行时用它避免重复触发。返回 `true` 时你应当拒绝新的存档/读档请求。

**常见误用与坑**

1. **实现驱动时忘了异步**。`Save` 必须真正异步（或至少正确返回 Task），否则主线程卡住。更糟的是返回 `Task.CompletedTask` 却把耗时 IO 同步做完。
2. **`IsWorkingAsync()` 永远返回 false**：快速连按存档会并发写同一个文件，损坏存档。
3. **`Delete` 不检查存在性**：删除不存在的存档应当返回 `false` 而不是抛异常。
4. **`GetSaveGameFileNames` 与 `GetSaveGameFileInfos` 顺序/内容不一致**：列表界面会显示错乱。两者必须来自同一份数据源。
5. **存档版本号硬编码**：`Save(string saveName, int version, ...)` 里的 `version` 由 `SaveManager` 传（当前是 1），不要自己改语义。

## 成员与调用时机

- `Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`：**异步**写盘。`saveName` 不含扩展名（由系统加 `.sav`）。返回的 Task 结果里有 `SaveResult` 与消息。**被 `SaveManager.Save` 调用**；自定义「立即存档」按钮也走这里。
- `SaveGameFileInfo[] GetSaveGameFileInfos()`：列出所有存档及其元信息（名称、时间、缩略图等）。存档选择界面用。
- `string[] GetSaveGameFileNames()`：只列名字。轻量路径（清理旧档、检测重名）。
- `MetaData LoadMetaData(string saveName)`：只读存档头。**不解对象图**，便宜。
- `LoadData Load(string saveName)`：读回完整数据。后续由 SaveManager 解析。
- `bool Delete(string saveName)`：删除存档。不存在返回 `false`。
- `bool IsSaveGameFileExists(string saveName)`：存在性检查。**先查再读**可以避免异常。
- `bool IsWorkingAsync()`：是否有异步操作在跑。用于并发保护。

## 真实示例

```csharp
// 自定义驱动：把存档写到另一个目录，并在异步期间拒绝重复请求
public class MyDirectorySaveDriver : ISaveDriver
{
    private readonly string _root;
    private bool _busy;

    public MyDirectorySaveDriver(string root) { _root = root; Directory.CreateDirectory(root); }

    public async Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)
    {
        if (_busy)
        {
            // SaveResultWithMessage 是 struct，只有 Default 静态属性和 (SaveResult, string) 构造
            return new SaveResultWithMessage(SaveResult.GeneralFailure, "busy");
        }

        _busy = true;
        try
        {
            string path = Path.Combine(_root, saveName + SaveManager.SaveFileExtension);
            // GameData 由 Header / Strings / ObjectData 等 byte[] 分块组成，
            // 真实驱动必须把每一块都持久化，并保证读回时顺序一致
            // File.WriteAllBytesAsync 是 .NET BCL 方法，不是游戏 API；这里只是演示异步写盘
            await File.WriteAllBytesAsync(path, gameData.Strings);
            return new SaveResultWithMessage(SaveResult.Success, string.Empty);
        }
        catch (IOException)
        {
            return new SaveResultWithMessage(SaveResult.FileDriverFailure, "write failed");
        }
        finally { _busy = false; }
    }

    public bool IsWorkingAsync() => _busy;

    public MetaData LoadMetaData(string saveName) { /* 只读头 */ return null; }
    public LoadData Load(string saveName) { /* 读回 */ return null; }
    public bool Delete(string saveName) { var p = Path.Combine(_root, saveName + ".sav"); if (!File.Exists(p)) return false; File.Delete(p); return true; }
    public bool IsSaveGameFileExists(string saveName) => File.Exists(Path.Combine(_root, saveName + ".sav"));
    public string[] GetSaveGameFileNames() => Directory.GetFiles(_root).Select(Path.GetFileNameWithoutExtension).ToArray();
    public SaveGameFileInfo[] GetSaveGameFileInfos() => new SaveGameFileInfo[0];
}
```

## 风险与边界

- **存档格式由驱动决定，但读取方也依赖它**：换驱动意味着老存档可能读不了。要兼容就得在驱动内部实现格式版本迁移。
- **异步 + 主线程**：`Save` 在后台线程跑。若你在完成回调里碰 `Campaign.Current`，已经回到主线程之外了。用事件通知回主线程。
- **路径与扩展名**：`saveName` 不带扩展名，扩展名由 [SaveManager](../SaveManager) 的 `SaveFileExtension` 约定。文件名要过滤非法字符（mod 里允许玩家输入存档名时必须做）。
- **异常边界**：驱动方法抛出的异常会一路上抛到存档按钮的调用栈。生产实现应当捕获并转成 `SaveResult` 失败结果。
- **不涉及世界状态**：驱动只搬运字节，不理解 `Hero` / `Settlement`。不要在这里访问 `Campaign.Current`。

## 依赖关系

- [SaveManager](../SaveManager) — 通过本接口读写，扩展名常量也在这里
- [SaveContext](../SaveContext) — 保存阶段把对象图转成 `GameData` 的上下文