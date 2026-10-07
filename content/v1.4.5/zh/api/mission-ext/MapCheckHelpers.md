---
title: "MapCheckHelpers"
description: "进自定义服务器前的地图版本预检：先看本地场景能不能对上 UniqueSceneId，对不上就去服务器拉 /maps/list 逐个核。超时不拒绝、抛异常也不拒绝 —— 失败开放。"
---

# MapCheckHelpers

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MapCheckHelpers`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MapCheckHelpers.cs`

## 概述

全文 103 行、一个 public 静态方法，是「你点加入一个自定义服务器之前，先确认本机的地图文件和服务器那边是同一版本」这道闸。它的工作顺序是两级：

**第一级** 解析服务器报的 `UniqueMapId`，拿它和本机同名场景的 UniqueToken + Revision 比。**第二级** 第一级过了，就去 `http://地址:端口/maps/list` 把服务器的全部地图清单拉下来逐个核。

全类只有一个 `private` 构造（`MapCheckHelpers.cs:99`），不可实例化；唯一的公开入口是 `CheckMaps`（`MapCheckHelpers.cs:21`），返回一个 `Task<(bool isRefusedToJoin, string notExistingMap)>`。

**唯一调用点是联机自定义主菜单**：`MPCustomGameVM.cs:1066` 的 `(bool, string) tuple = await MapCheckHelpers.CheckMaps(selectedServer);`。

## 心智模型

把它当成**「登机前的登机口证件核验」**，而且是一个**证件机坏了也放行**的核验。四条推论：

第一，**它是失败开放的（fail-open）。** 三条失败路径都返回 `(isRefusedToJoin: false, notExistingMap: null)`：HTTP 超时（`MapCheckHelpers.cs:67`）、任何异常（`MapCheckHelpers.cs:72`）、以及第一级判定为拒绝（那是唯一的真拒绝）。**换句话说「查不到」和「查过了没问题」返回的是同一个元组。** 你不能靠返回值区分「验证通过」与「验证器自己挂了」——只能去看日志。

第二，**超时只有 1.8 秒，而且这个数写死在私有常量里。** `TimeoutDuration` 的值是 `1.8`（`MapCheckHelpers.cs:14`），类型是 `double`，用在 `MapCheckHelpers.cs:47` 的 `TimeSpan.FromSeconds`。**它不是可配置项。** 在慢网络下，服务器清单拉取经常走不完 —— 而走不完的后果是**放行**，不是拒绝。

第三，**第一级的判定方向和直觉相反。** `CheckCurrentlyPlayedMap`（`MapCheckHelpers.cs:30`）在 `MapCheckHelpers.cs:36` 返回 `!flag`，而 `flag` 是 `UniqueSceneId.TryParse` 的结果。展开是：`UniqueMapId` **解析失败 → 返回 true → 继续去拉清单**；解析成功但**本地场景版本对不上 → 返回 false → 直接拒绝**。所以「本地缺这张图」反而会被拒（「对不上」），而「服务器的 UniqueMapId 格式不认识」会被放行到下一级。

第四，**端点是明文 HTTP。** `MapListEndpoint` 拼出来的是 `http://{Address}:{Port}/maps/list`（`MapCheckHelpers.cs:18`）。**没有 HTTPS、没有证书校验、没有签名。** 这条链路上返回的地图清单是完全不可信的输入，`MapCheckHelpers.cs:55` 直接拿它去 `JsonConvert.DeserializeObject`。

还有一条边界：`DoesSceneExist` 在 `MapCheckHelpers.cs:83` 判 `uniqueMapId == null` 就**直接返回 true**。也就是说**清单里某条地图没带 UniqueId 时，它被无条件当作「本地有」**。这是一条刻意的宽松路径，也是最容易被伪造的一条。

## 如何使用

**拿法：** 唯一公开方法，`await` 它：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Multiplayer;

public static async Task<bool> TryJoinCustomServer(GameServerEntry server)
{
    // 声明在 MapCheckHelpers.cs:21
    (bool isRefusedToJoin, string notExistingMap) = await MapCheckHelpers.CheckMaps(server);

    if (isRefusedToJoin)
    {
        Debug.Print("join refused, missing map = " + notExistingMap, 0);
        return false;
    }

    // ⚠ 注意：(false, null) 有两种来源 ——
    //    「全部地图都在」与「校验器超时/抛异常」。MapCheckHelpers.cs:67 和 :72
    //    返回的元组和成功路径完全一样，这里分不出来。
    return true;
}
```

想区分「验证通过」和「验证器挂了」，只能监听日志：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Multiplayer;

public static async Task<bool> TryJoinWithDiagnostics(GameServerEntry server)
{
    bool sawTimeoutLog = false;
    bool sawExceptionLog = false;

    void OnPrint(string message, ulong filter)
    {
        // 两条失败路径的日志文本见 MapCheckHelpers.cs:66 与 :71
        if (message.StartsWith("Getting map list timeout to host:"))
        {
            sawTimeoutLog = true;
        }
        else if (message.StartsWith("Exception getting map list from custom servers:"))
        {
            sawExceptionLog = true;
        }
    }

    Debug.OnPrint += OnPrint;
    try
    {
        (bool refused, string missing) = await MapCheckHelpers.CheckMaps(server);
        if (refused)
        {
            return false;   // 这是唯一可信的拒绝
        }

        if (sawTimeoutLog || sawExceptionLog)
        {
            // 元组说「通过」，但校验器其实没跑完 —— 应当按拒绝处理
            return false;
        }

        return true;
    }
    finally
    {
        Debug.OnPrint -= OnPrint;
    }
}
```

自己写一个「失败关闭」的版本（把超时/异常都改成拒绝）：

```csharp
using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using TaleWorlds.Library;

public static class StrictMapCheck
{
    // 私有构造留空，因为这是个静态工具类
    private StrictMapCheck()
    {
    }

    public static async Task<bool> AllMapsPresentAsync(string url, System.Func<string, bool> exists)
    {
        var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
        Stopwatch watch = Stopwatch.StartNew();
        Task<string> download = HttpHelper.DownloadStringTaskAsync(url);

        if (await Task.WhenAny(download, Task.Delay(-1, cts.Token)) != download)
        {
            // 与 MapCheckHelpers.cs:67 相反：这里选择拒绝而不是放行
            Debug.Print("strict check timed out after " + watch.ElapsedMilliseconds + " ms", 0);
            return false;
        }

        try
        {
            return exists(await download);
        }
        catch (Exception ex)
        {
            // 与 MapCheckHelpers.cs:72 相反
            Debug.Print("strict check failed: " + ex.Message, 0);
            return false;
        }
    }
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public sealed class MapCheckHelpers`（`MapCheckHelpers.cs:12`） | `sealed`。文件头的 `using` 里 `Newtonsoft.Json`（`MapCheckHelpers.cs:5`）说明它自己反序列化服务器响应，`System.Threading.Tasks`（`:4`）说明它是全异步的。 |
| `TimeoutDuration` | `private static readonly double TimeoutDuration = 1.8`（`MapCheckHelpers.cs:14`） | **唯一的字段。** 1.8 秒，`double` 类型，`readonly`。用在 `MapCheckHelpers.cs:47`。**不可配置** —— 想改超时只能改这个常量。 |
| `MapListEndpoint` | `private static string MapListEndpoint(GameServerEntry serverEntry)`（`MapCheckHelpers.cs:16`） | 拼清单 URL，**明文 http**（`MapCheckHelpers.cs:18`）。私有，形参是 [GameServerEntry](../GameServerEntry/)。 |
| `CheckMaps` | `public static async Task<(bool isRefusedToJoin, string notExistingMap)> CheckMaps(GameServerEntry serverEntry)`（`MapCheckHelpers.cs:21`） | **全类唯一的公开入口。** 第一级过（`MapCheckHelpers.cs:23`）就转第二级（`:25`），否则直接拒绝（`:27`）。**返回元组不是结构体，字段名靠元组名承载。** |
| `CheckCurrentlyPlayedMap` | `private static bool CheckCurrentlyPlayedMap(GameServerEntry serverEntry)`（`MapCheckHelpers.cs:30`） | 第一级。**返回 true = 继续去拉清单，不是「当前正在玩这张图」。** 判定式在 `MapCheckHelpers.cs:34`，取反在 `MapCheckHelpers.cs:36`。 |
| `CheckMapDownloaderMaps` | `private static async Task<(bool isRefusedToJoin, string notExistingMap)> CheckMapDownloaderMaps(GameServerEntry serverEntry)`（`MapCheckHelpers.cs:41`） | 第二级。三条出口：命中缺失地图拒绝（`:59`）、全部命中放行（`:62`）、**超时放行**（`:67`）、异常放行（`:72`）。 |
| `DoesSceneExist` | `private static bool DoesSceneExist(string mapId, string uniqueMapId, string revision)`（`MapCheckHelpers.cs:76`） | 真正比对一张图。**`uniqueMapId == null` 直接返回 true**（`MapCheckHelpers.cs:83` 到 `:86`），Token 相同才比 Revision（`:92` 到 `:95`）。**null 是不设防的通行证。** |
| `MapCheckHelpers()` | `private MapCheckHelpers()`（`MapCheckHelpers.cs:99`） | **空私有构造**，阻止外部 new。因为所有成员都是 `static`，这个构造本身永远不会被调用。 |

## 真实示例

看清三级判定的真实走向（把 `CheckCurrentlyPlayedMap` 的取反展开）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

// 复刻 MapCheckHelpers.cs:30-39 的判定，纯本地、无网络
public static bool ShouldFetchRemoteList(GameServerEntry serverEntry)
{
    UniqueSceneId parsed = default(UniqueSceneId);
    bool parsedOk = UniqueSceneId.TryParse(serverEntry.UniqueMapId, ref parsed);

    // 与 MapCheckHelpers.cs:34 同一句
    bool sceneMatches = parsedOk &&
        SceneExistsLocally(serverEntry.Map, parsed.UniqueToken, parsed.Revision);

    // 与 MapCheckHelpers.cs:36 同一句：!flag
    if (!parsedOk || !sceneMatches)
    {
        return !parsedOk;
        // 解析失败      -> true  -> 去拉远端清单
        // 解析成功但对不上 -> false -> 直接拒绝加入
    }

    return true;
}

// 本地场景比对，对应 MapCheckHelpers.cs:76-97
public static bool SceneExistsLocally(string mapId, string uniqueMapId, string revision)
{
    string fullPath = null;
    if (!Utilities.TryGetFullFilePathOfScene(mapId, ref fullPath))
    {
        return false;                       // MapCheckHelpers.cs:80
    }

    if (uniqueMapId == null)
    {
        return true;                        // MapCheckHelpers.cs:84 —— 无条件信任
    }

    UniqueSceneId local = default(UniqueSceneId);
    if (!Utilities.TryGetUniqueIdentifiersForSceneFile(fullPath, ref local))
    {
        return false;                       // MapCheckHelpers.cs:90
    }

    if (local.UniqueToken == uniqueMapId)
    {
        return local.Revision == revision;  // MapCheckHelpers.cs:94
    }
    return false;                           // MapCheckHelpers.cs:96
}
```

用你的服务器清单格式跑一遍自己的校验（对照 `MapCheckHelpers.cs:55` 的反序列化）：

```csharp
using System.Collections.Generic;
using Newtonsoft.Json;
using TaleWorlds.MountAndBlade.Multiplayer;

public static List<string> FindMissingMaps(string json, System.Func<string, bool> exists)
{
    var missing = new List<string>();

    // 结构与 MapCheckHelpers.cs:55 一致：先反序列化整个响应，再遍历 .Maps
    MapListResponse response = JsonConvert.DeserializeObject<MapListResponse>(json);

    foreach (MapListItemResponse map in response.Maps)
    {
        // 你的 exists 要同时校验 Token 与 Revision，
        // 否则就等于 MapCheckHelpers.cs:84 那条「不设防」路径
        if (!exists(map.Name))
        {
            missing.Add(map.Name);
        }
    }

    return missing;
}
```

监听两条失败日志，把「放行」还原成「拒绝」：

```csharp
using System.Collections.Generic;
using TaleWorlds.Library;

// 与 MapCheckHelpers.cs:66 和 :71 的字面前缀对齐
public static List<string> DetectIncompleteVerifications()
{
    var problems = new List<string>();

    Debug.OnPrint += (message, filter) =>
    {
        if (message.StartsWith("Getting map list timeout to host:"))
        {
            problems.Add("TIMEOUT: 校验未完成但已放行 -> " + message);
        }
        else if (message.StartsWith("Exception getting map list from custom servers:"))
        {
            problems.Add("EXCEPTION: 校验崩溃但已放行 -> " + message);
        }
    };

    return problems;   // 调用方需自行解绑
}
```

## 风险与边界

- **失败开放。** 超时（`MapCheckHelpers.cs:67`）与异常（`MapCheckHelpers.cs:72`）都返回「不拒绝」。**元组分不出「验证通过」和「验证器没跑完」。**
- **超时写死 1.8 秒**（`MapCheckHelpers.cs:14`）。慢网络下大概率走不完，而走不完的后果是放行。
- **明文 HTTP。** `MapCheckHelpers.cs:18` 无 TLS。**返回的清单不可信**，`MapCheckHelpers.cs:55` 却直接拿去反序列化。
- **`uniqueMapId == null` 无条件通过**（`MapCheckHelpers.cs:83`）。清单里缺 UniqueId 的条目会被当作「本地有」。
- **第一级判定方向反直觉。** UniqueMapId 解析失败 → 放行到第二级；本地场景版本不符 → 直接拒绝（`MapCheckHelpers.cs:36`）。
- **异步但没有取消。** `CancellationTokenSource` 只用来 `Task.Delay`（`MapCheckHelpers.cs:52`），**不取消 `downloadTask`**。下载本身可以继续跑完。
- **`MapCheckHelpers.cs:43` 有一句 `_ = 1;`** —— 反编译产物（弹栈），不是业务代码。
- **两个 `Debug.Print` 用的是硬编码 debugFilter**（`MapCheckHelpers.cs:66`、`:71`），不是默认的 `17592186044416uL`。**你的日志订阅器必须匹配这个 filter 才收得到。**
- **`CheckMaps` 的元组字段名只在编译期存在。** 反编译或跨语言调用时它们就是 `Item1` / `Item2`。
- **私有构造。** 想继承做定制版本也不行 —— `sealed` 加私有构造，两道都锁死。**只能复制一份。**
- **只在自定义服务器流程里被调用**（`MPCustomGameVM.cs:1066`）。官方服务器不走这条。

## 依赖关系

- 本类：`MapCheckHelpers.cs:12` 类头、`:14` 超时常量、`:21` 唯一公开入口、`:30` 第一级、`:41` 第二级、`:76` 场景比对、`:99` 私有构造
- 服务器描述：[GameServerEntry](../GameServerEntry/)；清单响应模型：[MapListResponse](../MapListResponse/) 与 [MapListItemResponse](../MapListItemResponse/)
- 场景标识：[UniqueSceneId](../../core-extra/UniqueSceneId/)（`TryParse` 与 `UniqueToken` / `Revision`）
- 场景文件查询：[Utilities](../../engine/Utilities/) 的 `TryGetFullFilePathOfScene` 与 `TryGetUniqueIdentifiersForSceneFile`
- 网络：[HttpHelper](../../core-extra/HttpHelper/) 的 `DownloadStringTaskAsync`
- 日志：[Debug](../../core-extra/Debug/)（`Debug.Print`，filter 见 `MapCheckHelpers.cs:66`）；另有 [DebugColor](../../core-extra/DebugColor/)
- 唯一调用点：[MPCustomGameVM](../MPCustomGameVM/) 的 `MPCustomGameVM.cs:1066`
- 同模块：[MultiplayerOptions](../MultiplayerOptions/)（本类的兄弟页，同在自定义服务器流程）
- 桶首页：[mission-ext API 分区](../)