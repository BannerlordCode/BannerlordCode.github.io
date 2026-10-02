---
title: "IPlatformFileHelper"
description: "IPlatformFileHelper: a public interface in TaleWorlds.Library; 14 exposed members (14 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/IPlatformFileHelper.cs."
---
# IPlatformFileHelper

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IPlatformFileHelper`
**File:** `TaleWorlds.Library/IPlatformFileHelper.cs`

## Overview

IPlatformFileHelper lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IPlatformFileHelper.cs. It is a public interface; the inheritance chain is IPlatformFileHelper. It exposes 14 public/protected members: 14 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IPlatformFileHelper is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain IPlatformFileHelper. The surface is method-led (methods 14/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IPlatformFileHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveFile` | `SaveResult SaveFile(PlatformFilePath path, byte[]data);` | method |
| `SaveFileString` | `SaveResult SaveFileString(PlatformFilePath path, string data);` | method |
| `AppendLineToFileString` | `SaveResult AppendLineToFileString(PlatformFilePath path, string data);` | method |
| `Task` | `Task<SaveResult>SaveFileAsync(PlatformFilePath path, byte[]data);` | method |
| `Task` | `Task<SaveResult>SaveFileStringAsync(PlatformFilePath path, string data);` | method |
| `FileExists` | `bool FileExists(PlatformFilePath path);` | method |
| `Task` | `Task<string>GetFileContentStringAsync(PlatformFilePath path);` | method |
| `GetFileContentString` | `string GetFileContentString(PlatformFilePath path);` | method |
| `byte[]GetFileContent` | `byte[]GetFileContent(PlatformFilePath filePath);` | method |
| `byte[]GetMetaDataContent` | `byte[]GetMetaDataContent(PlatformFilePath filePath);` | method |
| `DeleteFile` | `bool DeleteFile(PlatformFilePath path);` | method |
| `PlatformFilePath[]GetFiles` | `PlatformFilePath[]GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption);` | method |
| `GetFileFullPath` | `string GetFileFullPath(PlatformFilePath filePath);` | method |
| `GetError` | `string GetError();` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
