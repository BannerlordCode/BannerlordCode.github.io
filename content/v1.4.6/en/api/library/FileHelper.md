---
title: "FileHelper"
description: "FileHelper: a public class in TaleWorlds.Library; 16 exposed members (16 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/FileHelper.cs."
---
# FileHelper

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class FileHelper`
**File:** `TaleWorlds.Library/FileHelper.cs`

## Overview

FileHelper lives in the TaleWorlds.Library module, source file TaleWorlds.Library/FileHelper.cs. It is a public class; the inheritance chain is FileHelper. It exposes 16 public/protected members: 16 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FileHelper is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain FileHelper. The surface is method-led (methods 16/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/FileHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveFile` | `public static SaveResult SaveFile(PlatformFilePath path, byte[]data)` | method |
| `SaveFileString` | `public static SaveResult SaveFileString(PlatformFilePath path, string data)` | method |
| `GetFileFullPath` | `public static string GetFileFullPath(PlatformFilePath path)` | method |
| `AppendLineToFileString` | `public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)` | method |
| `Task` | `public static Task<SaveResult>SaveFileAsync(PlatformFilePath path, byte[]data)` | method |
| `Task` | `public static Task<SaveResult>SaveFileStringAsync(PlatformFilePath path, string data)` | method |
| `GetError` | `public static string GetError()` | method |
| `FileExists` | `public static bool FileExists(PlatformFilePath path)` | method |
| `Task` | `public static Task<string>GetFileContentStringAsync(PlatformFilePath path)` | method |
| `GetFileContentString` | `public static string GetFileContentString(PlatformFilePath path)` | method |
| `DeleteFile` | `public static void DeleteFile(PlatformFilePath path)` | method |
| `PlatformFilePath[]GetFiles` | `public static PlatformFilePath[]GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)` | method |
| `byte[]GetFileContent` | `public static byte[]GetFileContent(PlatformFilePath filePath)` | method |
| `byte[]GetMetaDataContent` | `public static byte[]GetMetaDataContent(PlatformFilePath filePath)` | method |
| `CopyFile` | `public static void CopyFile(PlatformFilePath source, PlatformFilePath target)` | method |
| `CopyDirectory` | `public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
